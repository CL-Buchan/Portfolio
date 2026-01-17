'use client';

import clsx from 'clsx';
import { TextProps } from '@/helpers/types';

export default function Text({ text, size, className }: TextProps) {
    const getFontSize = () => {
        switch (size) {
            case 'xl':
                return 'text-[50px]';
            case 'lg':
                return 'text-[28px]';
            case 'md':
                return 'text-[15px]';
            case 'sm':
                return 'text-[8px]';
            default:
                return 'text-[15px]';
        }
    };

    return (
        <>
            <p className={clsx(className, getFontSize())}>{text}</p>
        </>
    );
}
