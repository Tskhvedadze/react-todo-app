import React from 'react'

import './Input.scss'

const INPUT_STYLES = {
    fill: 'inputForFill',
    edit: 'inputForEdit',
    hide: 'inputHide',
}

export const Input = ({ inputTypes, className, ...props }) => {
    return <input {...props} className={INPUT_STYLES[inputTypes]} />
}
