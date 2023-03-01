import React from 'react'
import './FormRegister.css'
import Logo from '../img/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'

const FormRegister = () => {




    return (
        <form id="form-sign-up" action="#" className="sign-up-form">
            <img className="logoo" src={Logo} alt='imgg' />
            <h2 className="title">Registrar-se</h2>
            <div className="input-field">
                <i><FontAwesomeIcon icon={faPhone}/></i>
                <input type="text" id="username" placeholder="Nome" required />
            </div>
            <div className="input-field">
                <i className="fa-solid fa-phone"></i>
                <input type="number" id="telefone" placeholder="Telefone" required />
            </div>


            <div className="actionBtns">
                <button className="actionBtn signupBtn" onClick="adicionarcpfcnpj('adicionar_CPFCNPJ')" type="button" >Pessoa Juridica</button>
                <button className="actionBtn loginBtn" onClick="removercpfcnpj('adicionar_CPFCNPJ')" type="button">Pessoa Fisica</button>
                <button className="actionBtn moveBtn" onClick="adicionarcpfcnpj('adicionar_CPFCNPJ')" type="button">Pessoa Juridica</button>
            </div>  


            <div className="input-field" id="adicionar_CPFCNPJ" >
                <i className="fa-solid fa-file" id="icone_cpfcnpj"></i>
                <input type="text" placeholder="CNPJ" id="text_cpfcnpj" onInput="this.value = this.value.replace(/[^0-9./-]/g, '');" />
            </div>

            <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="date" id="nascimento" name="nascimento" placeholder="Data de nascimento" required />
            </div>
            <div className="input-field">
                <i className="fa-solid fa-location-dot"></i>
                <input type="number" id="cep" placeholder="CEP" required />
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" className="consultacep" rel="noreferrer">Consultar CEP</a>
            </div>

            <div className="divbotao">
                <input type="text" id="complemento" placeholder="Complemento" />
                <input type="number" id="numero" placeholder="Numero" required />
            </div>


            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" id="senha" placeholder="Senha" required />
            </div>
            <div className="select-btn" id="adicionar_material"   >
                <i className="fa-solid fa-recycle" id="icone_material"></i>
                <span className="btn-text">Materiais que eu recolho</span>
                <span className="arrow-dwn">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <ul id="lista" className="list-items">

            </ul>
            <div className="divbotao">
                <button type="button" onclick="adicionarmaterial('adicionar_material')" className="btnescolha" id="btn-catador" value="Catador(a)">Catador(a)</button>
                <button type="button" onclick="removermaterial('adicionar_material')" className="btnescolha" id="btn-gerador" value="Gerador de residuo">Gerador de residuo</button>
            </div>
            <button type="button" className="btn" id="registerbtn" value="Registrar" >Registrar </button>
        </form>
    )
}

export default FormRegister