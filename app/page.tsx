'use client';

import Text from '@/components/ui/Text';
import Image from 'next/image';
import Me from '@/public/E4DF1432-FAD7-4780-B65B-7EE5021C5572_1_105_c.jpeg';
import { useRef, useState } from 'react';
import clsx from 'clsx';

export default function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    const [iconHovered, setIconHovered] = useState(false);

    return (
        <div className="p-[50px] flex flex-col items-start gap-[50px]">
            <div className="w-full min-h-[500px] flex flex-col justify-center items-center gap-[30px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]">
                <div className="my-5 flex justify-center gap-10">
                    <div className="h-[200px] flex flex-col justify-center items-center overflow-hidden">
                        <div className="flex flex-col justify-center items-start">
                            <Text
                                text="Hi,"
                                className="tracking-tighter text-[60px]"
                            />

                            <Text
                                text="I'm Callam!"
                                className="tracking-tighter text-[60px] leading-5"
                            />
                        </div>
                    </div>

                    <div className="relative w-[150px] h-[200px] aspect-2/1">
                        <Image
                            src={Me}
                            alt=""
                            fill
                            className="object-cover rounded-[5px] shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.08)]"
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
                            'invert',
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

                <div className="flex gap-5">
                    <button
                        className="py-[5px] px-[20px] text-black bg-white hover:bg-white/50 rounded-[10px] transition-all duration-200"
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

                <p className="text-xs text-white/50">
                    Don't want to scroll? Use the navigation buttons above!
                </p>
            </div>

            <div
                ref={aboutRef}
                className="w-full flex flex-col gap-10"
            >
                <div className="w-full px-2.5 bg-white text-black rounded-[5px]">
                    <Text
                        text="About Me"
                        size="xl"
                        className="tracking-tighter"
                    />
                </div>

                <div className="my-10 w-full grid grid-rows-[auto_1fr] gap-5">
                    <div className="flex flex-col items-start gap-10">
                        <div className="flex items-center gap-5">
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

                        <div className="flex items-center gap-5">
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

                        <div className="flex items-center gap-5">
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
                <div className="w-full px-2.5 bg-white text-black rounded-[5px]">
                    <Text
                        text="Experience"
                        size="xl"
                        className="tracking-tighter"
                    />
                </div>

                <div className="my-10 w-full grid grid-cols-[1fr_2fr] gap-4">
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

                    <div className='w-full p-[20px] bg-white rounded-[10px] flex flex-col'>
                        <Text 
                            text='Responsibilities'
                            className='tracking-tight text-black text-[20px]'
                        />

                        <ul className='px-[20px] mt-4 flex flex-col gap-3'>
                            <li className='list-disc text-black'>
                                <Text
                                    text='Create and manage front end pages'
                                    className='text-black'
                                />
                            </li>
                            <li className='list-disc text-black'>
                                <Text
                                    text='Front end pages'
                                    className='text-black'
                                />
                            </li>
                            <li className='list-disc text-black'>
                                <Text
                                    text='Front end pages'
                                    className='text-black'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
