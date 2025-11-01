import React from 'react'

export const Layout = (props) => {
    const { children } = props
    
    const header = (
        <header>
            <h1 className="text-gradient">The GymBro </h1>
            <p><strong>Get Fit with 30 Simple Workout Program</strong></p>
        </header>
    )
    
    const footer = (
        <footer>
        <p>Built by <a href="" target="_blank">Chijioke L</a><br/> Styled with <a href="" target="_blank">FantaCSS</a></p>
        </footer>
    )
    
    return (
       <>
           {header}
           {children}
           {footer}
       </>
    )
}
