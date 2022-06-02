import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='flex min-h-screen '>
            {children}
        </div>
    )
}

export default Wrapper