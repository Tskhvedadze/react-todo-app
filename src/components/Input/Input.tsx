import React from 'react'

import './Input.scss'

const INPUT_STYLES = {
    fill: 'inputForFill',
    edit: 'inputForEdit',
    hide: 'inputHide',
}

type InputTypes = 'fill' | 'edit' | 'hide'

type InputProps = {
    inputTypes: InputTypes
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ inputTypes, className, ...props }: InputProps) => {
    return <input {...props} className={INPUT_STYLES[inputTypes]} />
}
