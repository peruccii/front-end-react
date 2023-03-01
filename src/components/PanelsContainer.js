import React from 'react'
import Logoo from '../img/cadastro3-removebg-preview.png'
import Logo2 from '../img/login2boneco.png'

const PanelsContainer = () => {

    const [signIn, toggle] = React.useState(true);

    return (
        <div className="panels-container">
            <div className={`panel left-panel`} signinIn={signIn}>
                <div className="content">
                    <h3>É novo por aqui ?</h3>
                    <p>
                        Cadastra-se para participar de uma nova inovação no mundo para salvar nosso planeta.
                    </p>
                    <button className="btn transparent" id="sign-up-btn" onClick={() => toggle(true)}>
                        Registra-se
                    </button>
                </div>
                <img src={Logoo} className="image" alt="" />
            </div>
            <div className="panel right-panel" signinIn={signIn}>
                <div className="content">
                    <h3>Ja faz parte da nossa comunidade ?</h3>
                    <p>
                        Faça login em sua conta e continue nos ajudando a salvar o planeta.
                    </p>
                    <button className="btn transparent" id="sign-in-btn" onClick={() => toggle(true)}>
                        Entrar
                    </button>
                </div>
                <img src={Logo2} className="image" id="image" alt="" />
            </div>
        </div>

    )
}

export default PanelsContainer