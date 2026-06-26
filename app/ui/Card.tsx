import clsx from 'clsx';
import React from 'react';

type Props = {
    children: React.ReactNode;
    background?: string;
    className?: string;
};

export default function Card({ children, background, className }: Props) {
    return <div className={clsx(background, className)}>{children}</div>;
}
