import React from 'react'

const Paragraph = ({ children }) => {
    return (
        <p className='text-md tracking-wide leading-relaxed'>
            {children}
        </p>
    )
}

export default Paragraph