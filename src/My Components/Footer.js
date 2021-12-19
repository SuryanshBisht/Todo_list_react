import React from 'react'

export const Footer = () => {
    let footerStyle ={
        margin:"25px"
    }
    return (
        //remember to not use Footer and use footer, causes an infinite loop and page gets stuck while loading
        <footer className="bg-dark text-light py-3" style={footerStyle} >
            <p className="text-center">
                Copyright &copy; MyTodoslist.com
            </p>
        </footer>
    )
}
