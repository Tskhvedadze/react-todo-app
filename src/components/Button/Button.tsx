import React from 'react'

import './Button.scss'

type ButtonProps = {
    children: React.ReactNode
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={`basic-button ${className}`} {...props}>
            {children}
        </button>
    )
}
