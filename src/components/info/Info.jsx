import React from 'react'
import './info.css'

const myVar = (props) => {
    return (
        <div className="info">
            <div className="perfil">
                <img width="100%" height="100%" src="https://imagens.netlify.app/perfil.png" alt="" />
            </div>
            <h1 className="nome">Pablo Lucena</h1>
            <p className="email">pablodplucenahh@gmail.com</p>
            <div className="redes">
                <a href="https://www.linkedin.com/in/pablo-lucena/" target="_blank" rel="noopener noreferrer">
                    <div className="lkd">
                        <img width="80%" height="100%" src="https://imagens.netlify.app/lkd.svg" alt="" />
                    </div>
                </a>
                <a href="https://github.com/blopah/Curriculo" target="_blank" rel="noopener noreferrer">
                    <div className="git">
                        <img width="80%" height="100%" src="https://imagens.netlify.app/git.svg" alt="" />
                    </div>
                </a>
            </div>
            <div className="linha"></div>
            <h3 className="desc">
                Esta página foi criada para praticar os fundamentos em
            </h3>
            <div className="em-react">
                <h1>React</h1>
                <div className="react-logo1">
                    <img width="100%" height="100%" src="https://imagens.netlify.app/reactreact-logo.svg" alt="" />
                </div>
            </div>
            <div className="chapa">
                <p className="agrad">
                    Cada item desta página, representa um conceito de React que foi aprendido e praticado.
<br></br>
                    <br></br>
Deixo meus sinceros agradecimentos ao professor Leonardo Leitão e também à escola Cod3r, que disponibilizaram o conhecimento de forma gratuita no youtube.
                    </p>
                <h2 className="obrigado">
                    Muito Obrigado!
                    </h2>
            </div>
        </div>
    )
}

export default myVar;