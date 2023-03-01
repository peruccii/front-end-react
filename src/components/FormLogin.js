import React from 'react'
import './FormLogin.css'
import './Button.css'
import Logo from '../img/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

function FormLogin() {
    return (
        <form action="#" className="sign-in-form" id="sign-in-form">
            <img className="logoo" src={Logo} alt='img' />
            <h2 className="title">Entrar</h2>
            <div className="input-field">
                <i className="fas fa-user"><FontAwesomeIcon icon={faEnvelope} /></i>
                <input type="email" placeholder="Email" id="email-login" required />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                <input type="password" placeholder="Senha" id="senha-login" required />
            </div>
            <button type="submit" value="Entrar" className="btn solid" id="sign-in">Entrar</button>

        </form>
    )
}

export default FormLogin