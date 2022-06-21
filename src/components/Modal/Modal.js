import React, { useState } from 'react'

export const Modal = ({ state, children }) => {
    return (
        <div className={`modal-container ${state ? 'block' : 'hidden'}`}>
            {children}
        </div>
    )
}
