import React from "react";

interface BaseButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function BaseButton({ onClick, children, className }: BaseButtonProps) {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}