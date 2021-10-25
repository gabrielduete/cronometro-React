import React from 'react'
import './style.css'

import BotaoIniciar from "../botaoInicar/BotaoIniciar"
import BotaoParar from "../botaoParar/BotaoParar"
import BotaoReiniciar from '../botaoReiniciar/BotaoReiniciar'

function Botoes(props){
    return (
        <div className = 'containerBotoes'>
            <BotaoParar  parar = {props.parar} />
            <BotaoIniciar className = 'botaoIniciar' iniciar = {props.iniciar} />
            <BotaoReiniciar reiniciar = {props.reiniciar}/>
        </div>
    )
}

export default Botoes