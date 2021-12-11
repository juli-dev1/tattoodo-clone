import React from 'react'
import "./button.css";

function Button({inverted, children}) {
    return (
        <button className = {`button-component ${inverted ? 'inverted':''}`} >
              {children}
        </button>
    )
}

export default Button
