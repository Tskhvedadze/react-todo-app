import './Button.scss'

export const Button = ({ children, className, ...props }) => {
    return (
        <button className={`basic-button ${className}`} {...props}>
            {children}
        </button>
    )
}
