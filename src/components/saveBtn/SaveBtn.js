import React from 'react'
import "./saveBtn.css"


function SaveBtn({ children }) {
    return (
        <div>
        <button className="saveBtn" >
            {children}
        </button>
        </div>
    )
}

export default SaveBtn
