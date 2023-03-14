import React from 'react'

import './Button.scss'

export const Button = (props) => {
    return (
        <button
            className={`basic-button ${props.className}`}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
