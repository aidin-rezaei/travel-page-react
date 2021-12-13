import React from "react"
import { Link } from "react-router-dom"

const STYLES = ['btn--primary', 'btn--outline']

const SIZE = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    butonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(butonSize) ? butonSize : STYLES[0]

    return (
        <Link to='/sing-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonStyle}`}>
                {children}
            </button>
        </Link>
    )
}