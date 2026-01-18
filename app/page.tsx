'use client';

import Text from '@/components/ui/Text';
import Image from 'next/image';
import Me from '@/public/E4DF1432-FAD7-4780-B65B-7EE5021C5572_1_105_c.jpeg';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    const [iconHovered, setIconHovered] = useState(false);
    const [isVisible, setIsVisible] = useState({
        description: false,
        education: false,
        hobbies: false,
    });

    const descriptionRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const hobbiesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Array to store all IntersectionObserver instances
        // IntersectionObserver is a browser API that watches when elements enter/exit the viewport
        // We store them in an array so we can clean them up later
        const observers: IntersectionObserver[] = [];

        // Helper function to set up an observer for a single element
        // @param ref - A React ref object pointing to the DOM element we want to watch
        //              RefObject<HTMLDivElement | null> means it's a reference that can be null initially
        // @param key - A string key that matches one of the properties in isVisible state object
        //              ('description' | 'education' | 'hobbies') - tells us which element we're watching
        const observeElement = (
            ref: React.RefObject<HTMLDivElement | null>,
            key: keyof typeof isVisible,
        ) => {
            // Get the actual DOM element from the ref
            // ref.current will be null until React attaches the element to the DOM
            const element = ref.current;
            // Early return if element doesn't exist yet (defensive programming)
            if (!element) return;

            // Create a new IntersectionObserver instance
            // This API watches for when an element intersects (overlaps) with the viewport
            // @param callback - Function called when intersection changes
            //                   [entry] - Array destructuring: gets first entry from entries array
            //                            Each entry contains info about the intersection (isIntersecting, intersectionRatio, etc.)
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // entry.isIntersecting is true when the element is visible in the viewport
                    // and false when it's outside the viewport
                    if (entry.isIntersecting) {
                        // Update state to mark this element as visible
                        // Using functional update (prev =>) to ensure we have latest state
                        // [key] uses the key parameter to update the correct property dynamically
                        setIsVisible((prev) => ({ ...prev, [key]: true }));
                        // Stop observing this element once it's been triggered (one-time animation)
                        // This improves performance and prevents re-triggering
                        observer.unobserve(element);
                    }
                },
                // Configuration options for the observer
                {
                    // threshold: 0.1 means trigger when 10% of the element is visible
                    // Can be a number (0-1) or array of numbers for multiple thresholds
                    threshold: 0.1,
                    // rootMargin: '0px' - Margin around the viewport root
                    // Can be used to trigger earlier/later (e.g., '50px' triggers 50px before element enters)
                    // Negative values delay triggering (e.g., '-50px' waits until element is 50px into viewport)
                    rootMargin: '0px',
                },
            );

            // Start observing the element
            // The observer will now watch this element and call the callback when it intersects
            observer.observe(element);
            // Store the observer in our array so we can clean it up later
            observers.push(observer);
        };

        // Set up observers for each section we want to animate
        // Each call creates an observer and starts watching that element
        observeElement(descriptionRef, 'description');
        observeElement(educationRef, 'education');
        observeElement(hobbiesRef, 'hobbies');

        // Cleanup function - runs when component unmounts or dependencies change
        // This prevents memory leaks by disconnecting all observers
        return () => {
            // Loop through all observers and disconnect them
            // disconnect() stops all observation and cleans up resources
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="p-[50px] md:p-0 md:px-[250px] md:py-[50px] flex flex-col items-start gap-[50px]">
            <div className="w-full min-h-[500px] flex flex-col justify-center items-center gap-[30px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,transparent_40%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_40%)]">
                <div className="my-5 flex justify-center gap-10">
                    <div className="h-[200px] flex flex-col justify-center items-center overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2.5">
                            <Text
                                text="Hi,"
                                className="tracking-tighter text-[50px] md:text-[60px] leading-12 md:leading-24"
                            />

                            <Text
                                text="I'm Callam!"
                                className="tracking-tighter text-[50px] text-center md:text-start md:text-[60px] leading-10 md:leading-5"
                            />
                        </div>
                    </div>

                    <div className="relative w-[150px] h-[200px] aspect-2/1">
                        <Image
                            src={Me}
                            alt=""
                            fill
                            className="object-cover rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.15),0_0_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.08)]"
                        />
                    </div>
                </div>

                <div
                    className="flex items-center gap-5 group"
                    onMouseOver={() => setIconHovered(true)}
                    onMouseOut={() => setIconHovered(false)}
                >
                    <Image
                        src={'/pin-icon.png'}
                        alt="Pin Icon"
                        height={20}
                        width={20}
                        className={clsx(
                            'dark:invert',
                            iconHovered ? '' : 'animate-bounce',
                        )}
                    />

                    <div className="max-w-0 overflow-hidden transition-all duration-700 ease-out group-hover:max-w-[200px]">
                        <Text
                            text="Gold Coast, Australia"
                            className="opacity-0 whitespace-nowrap transition-all duration-700 ease-out group-hover:opacity-100 tracking-tight"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <button
                        className="py-[5px] px-[20px] text-white dark:text-black bg-black dark:bg-white hover:bg-white/50 rounded-[10px] transition-all duration-200"
                        onClick={() => {
                            aboutRef.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }}
                    >
                        About Me
                    </button>

                    <button
                        className="py-[5px] px-[20px] border hover:border-white/50 rounded-[10px] transition-all duration-200"
                        onClick={() => {
                            experienceRef.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }}
                    >
                        Experience
                    </button>
                </div>

                <p className="text-xs text-white/50 text-center md:text-start">
                    Dont want to scroll? Use the navigation buttons above!
                </p>
            </div>

            <div
                ref={aboutRef}
                className="w-full flex flex-col gap-10"
            >
                <div className="w-full px-2.5 bg-black dark:bg-white text-white dark:text-black rounded-[5px]">
                    <Text
                        text="About Me"
                        size="xl"
                        className="tracking-tighter"
                    />
                </div>

                <div className="my-10 w-full grid grid-rows-[auto_1fr] gap-5">
                    <div className="flex flex-col items-start gap-10">
                        <div
                            ref={descriptionRef}
                            className={clsx(
                                'flex items-center gap-5 transition-all duration-700 ease-out',
                                isVisible.description
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10',
                            )}
                        >
                            <Text
                                text="Description"
                                size="lg"
                                className="min-w-[150px]"
                            />

                            <Text 
                                text="I'm 22 years old, located on the Gold Coast,
                                Australia. I am passionate about technology and
                                passionate about developing applications."
                            />
                        </div>

                        <div
                            ref={educationRef}
                            className={clsx(
                                'flex items-center gap-5 transition-all duration-700 ease-out delay-150',
                                isVisible.education
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10',
                            )}
                        >
                            <Text
                                text="Education"
                                size="lg"
                                className="min-w-[150px]"
                            />

                            <Text
                                text='A 3rd year student at Southern Cross University,
                                studying a Bachelor of Information Technology,
                                Majoring in Software Development.'
                            />
                        </div>

                        <div
                            ref={hobbiesRef}
                            className={clsx(
                                'flex items-center gap-5 transition-all duration-700 ease-out delay-300',
                                isVisible.hobbies
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10',
                            )}
                        >
                            <Text
                                text="Hobbies"
                                size="lg"
                                className="min-w-[150px]"
                            />

                            <Text 
                                text='In my spare time, I like to keep active and get
                                out. I mountain bike ride, hit the gym, and
                                travel.'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={experienceRef}
                className="w-full flex flex-col gap-10"
            >
                <div className="w-full px-2.5 bg-black dark:bg-white text-white dark:text-black rounded-[5px]">
                    <Text
                        text="Experience"
                        size="xl"
                        className="tracking-tighter"
                    />
                </div>

                <div className="my-10 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                    <div className='w-full p-[20px] flex flex-col gap-5 border rounded-[10px] hover:bg-white hover:text-black transition-all duration-400 ease-out'>
                        <div className='flex flex-col items-start'>
                            <Text 
                                text='Role:'
                                className='text-[20px] tracking-tight'
                            />

                            <Text 
                                text='YourKind'
                                className='text-[30px] tracking-tight'
                            />
                        </div>

                        <div>
                            <Text
                                text='YTD:'
                                className='text-[15px] tracking-tight'
                            />

                            <Text 
                                text='2025 - Current'
                                className='text-[20px] tracking-tight'
                            />
                        </div>
                    </div>

                    <div className='w-full p-[20px] bg-black dark:bg-white rounded-[10px] flex flex-col'>
                        <Text 
                            text='Responsibilities'
                            className='tracking-tight text-white dark:text-black text-[20px]'
                        />

                        <ul className='px-[20px] mt-4 flex flex-col gap-3'>
                            <li className='list-disc text-white dark:text-black'>
                                <Text
                                    text='Create and manage front end pages'
                                    className='text-white dark:text-black'
                                />
                            </li>
                            <li className='list-disc text-white dark:text-black'>
                                <Text
                                    text='Front end pages'
                                    className='text-white dark:text-black'
                                />
                            </li>
                            <li className='list-disc text-white dark:text-black'>
                                <Text
                                    text='Front end pages'
                                    className='text-white dark:text-black'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
