import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Logo from '../img/logoHeader.svg'

export const Header = () => {
    return (
        <>
        <Jumbotron className="jumbo-custom">
            <header>
                <h1>L. Felipe Moreno & Asociados</h1>
                <h2>Contadores Públicos</h2>
                <a href="#servicios"><img className="logo" src={Logo} alt="Logo"/></a>
            </header>
        </Jumbotron>
        </>
    )
}

