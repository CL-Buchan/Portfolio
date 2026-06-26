'use client';

import Image, { StaticImageData } from 'next/image';
import {
    useRef,
    useState,
    useEffect,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';
import ProfilePicture from '@/public/E4DF1432-FAD7-4780-B65B-7EE5021C5572_1_105_c.jpeg';
import Pin from '@/public/pin-icon.png';
import LinkedinLogo from '@/public/linkedin.png';
import GithubLogo from '@/public/github.png';
import { LucideProps, MailIcon } from 'lucide-react';
import { experiences } from './data/experiences';
import { universityEducation } from './data/university';
import clsx from 'clsx';

export default function Home() {
    const [isVisible, setIsVisible] = useState({
        experience: false,
        education: false,
    });

    const experienceRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Helper function to set up an observer for a single element
        const observeElement = (
            ref: React.RefObject<HTMLDivElement | null>,
            key: keyof typeof isVisible,
        ) => {
            const element = ref.current;

            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [key]: true }));

                        observer.unobserve(element);
                    }
                },
                {
                    // threshold: 0.1 means trigger when 10% of the element is visible
                    threshold: 0.1,
                    // rootMargin: '0px' - Margin around the viewport root
                    rootMargin: '-100px',
                },
            );

            observer.observe(element);
            observers.push(observer);
        };

        // Set up observers for each section we want to animate
        observeElement(experienceRef, 'experience');
        observeElement(educationRef, 'education');

        // Cleanup function - runs when component unmounts or dependencies change & prevents memory leaks by disconnecting all observers
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    const socialButtons: {
        src:
            | string
            | StaticImageData
            | ForwardRefExoticComponent<
                  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
              >;
        alt?: string;
        height?: number;
        width?: number;
    }[] = [
        { src: MailIcon },
        {
            src: LinkedinLogo,
            alt: 'Linkedin logo',
            height: 24,
            width: 24,
        },
        {
            src: GithubLogo,
            alt: 'Github logo',
            height: 24,
            width: 24,
        },
    ];

    return (
        <div className="relative min-h-screen p-12.5 md:p-0 md:px-62.5 md:py-16 flex flex-col items-start gap-12.5">
            <main className="w-full flex flex-col justify-center items-center gap-7.5 z-10">
                <section className="w-full min-w-0 md:min-w-200 my-5 flex flex-col justify-center items-center gap-20">
                    <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-10">
                        <div className="w-full flex flex-col justify-start items-center md:items-start gap-5 overflow-hidden">
                            <div className="flex flex-col items-center md:items-start gap-2.5">
                                <h1 className="font-bold tracking-tight text-3xl md:text-4xl">
                                    Callam Buchan
                                </h1>

                                <p className="text-sm md:text-base text-center md:text-start">
                                    Software Engineer. <br />
                                    <i>Learning through building.</i>
                                </p>

                                <div className="flex items-center gap-2.5">
                                    <Image
                                        src={Pin}
                                        alt="Pin icon"
                                        width={15}
                                        height={15}
                                        className="hidden md:block dark:invert"
                                    />
                                    <p className="text-sm md:text-base">
                                        Gold Coast, Australia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5 md:gap-5">
                                {socialButtons &&
                                    socialButtons.map(
                                        (
                                            { src, alt, height, width },
                                            index,
                                        ) => {
                                            return (
                                                <a
                                                    key={index}
                                                    href={
                                                        typeof src !==
                                                            'string' &&
                                                        'src' in src
                                                            ? alt?.includes(
                                                                  'Linkedin',
                                                              )
                                                                ? 'https://www.linkedin.com/in/callam-buchan-810974278/'
                                                                : 'https://github.com/CL-Buchan'
                                                            : 'mailto:clathanbuchan@gmail.com'
                                                    }
                                                    className="h-10 w-10 flex justify-center items-center border border-black/20 dark:border-white/20 rounded-[5px] hover:bg-[#d0d0d0] dark:hover:bg-[#333333] transition-colors duration-200 ease-in-out"
                                                >
                                                    {typeof src !== 'string' &&
                                                    'src' in src ? (
                                                        <Image
                                                            src={src}
                                                            alt={alt ?? ''}
                                                            height={height!}
                                                            width={width!}
                                                            className={clsx(
                                                                'opacity-50',
                                                                alt?.includes(
                                                                    'Linkedin',
                                                                )
                                                                    ? 'invert dark:invert-0'
                                                                    : 'dark:invert',
                                                            )}
                                                        />
                                                    ) : (
                                                        (() => {
                                                            const Icon =
                                                                src as React.ElementType;
                                                            return (
                                                                <Icon
                                                                    opacity={
                                                                        0.5
                                                                    }
                                                                />
                                                            );
                                                        })()
                                                    )}
                                                </a>
                                            );
                                        },
                                    )}
                            </div>
                        </div>

                        <div className="relative mx-auto md:mx-0 w-37.5 h-50 aspect-2/1">
                            <Image
                                src={ProfilePicture}
                                alt="Personal picture"
                                fill
                                className="object-cover rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.35),0_0_40px_rgba(0,0,0,0.28)] dark:shadow-[0_0_20px_rgba(255,255,255,0.35),0_0_40px_rgba(255,255,255,0.28)]"
                            />
                        </div>
                    </div>

                    {/* Relevant work experience */}
                    <div
                        ref={experienceRef}
                        className="w-full flex flex-col justify-start items-start gap-5"
                    >
                        <h2 className="font-semibold tracking-tight text-2xl md:text-3xl">
                            Relevant Experience
                        </h2>

                        <div className="w-full flex flex-col justify-center items-start gap-5">
                            {experiences.map(
                                (
                                    {
                                        name,
                                        content,
                                        dateFrom,
                                        dateTo,
                                        role: { roleName, responsibilities },
                                    },
                                    index,
                                ) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                transitionDelay: `${index * 250}ms`,
                                            }}
                                            className={clsx(
                                                'w-full p-5 md:p-10 border dark:border-white/20 bg-[#333333]/5 dark:bg-white/5 rounded-2xl backdrop-blur-3xl transition-all duration-500 ease-in-out',
                                                isVisible.experience
                                                    ? `opacity-100 translate-y-0`
                                                    : 'opacity-0 translate-y-4',
                                            )}
                                        >
                                            <div className="w-full flex flex-col gap-5">
                                                <div className="flex flex-col md:flex-row justify-between items-start">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                                                            {name}
                                                        </h3>
                                                        <p className="text-sm md:text-base text-muted-foreground">
                                                            {roleName}
                                                        </p>
                                                    </div>

                                                    <p className="mt-2.5 md:mt-0 text-sm md:text-base text-muted-foreground">
                                                        {dateFrom} - {dateTo}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-sm md:text-base">
                                                        {content}
                                                    </p>

                                                    <ul className="list-inside list-disc space-y-3 md:space-y-0">
                                                        {responsibilities.map(
                                                            (text, index) => (
                                                                <li key={index}>
                                                                    {text}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    <div
                        ref={educationRef}
                        className="w-full flex flex-col justify-start items-start gap-5"
                    >
                        <h2 className="font-semibold tracking-tight text-2xl md:text-3xl">
                            Education
                        </h2>

                        <div className="w-full flex flex-col justify-center items-start gap-5">
                            {universityEducation.map(
                                (
                                    {
                                        degree,
                                        major,
                                        university,
                                        dateFrom,
                                        dateTo,
                                    },
                                    index,
                                ) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                transitionDelay: `${index * 250}ms`,
                                            }}
                                            className={clsx(
                                                'w-full p-5 md:p-10 border dark:border-white/20 bg-[#333333]/5 dark:bg-white/5 rounded-2xl backdrop-blur-3xl transition-all duration-500 ease-in-out',
                                                isVisible.education
                                                    ? `opacity-100 translate-y-0`
                                                    : 'opacity-0 translate-y-4',
                                            )}
                                        >
                                            <div className="w-full flex flex-col gap-5">
                                                <div className="flex flex-col md:flex-row justify-between items-start">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                                                            {degree}
                                                        </h3>
                                                        {major && (
                                                            <p className="text-base md:text-xl text-foreground">
                                                                Majoring in{' '}
                                                                {major}
                                                            </p>
                                                        )}
                                                        <p className="text-sm: md:text-base text-muted-foreground">
                                                            @ {university}
                                                        </p>
                                                    </div>

                                                    <p className="mt-2.5 md:mt-0 text-sm: md:text-base text-muted-foreground">
                                                        {dateFrom} - {dateTo}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom radial glow */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.17)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.3)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.07)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.07)_0%,transparent_50%)]" />
        </div>
    );
}
