import React from 'react'
import './style.css'

import BotaoIniciar from "../botaoInicar/BotaoIniciar"
import BotaoParar from "../botaoParar/BotaoParar"
import BotaoReiniciar from '../botaoReiniciar/BotaoReiniciar'
import { useState } from 'react/cjs/react.development'

function Botoes(props){

    const [running, setRunning] = useState(false)

    const handleStart = (started) => {
        setRunning(started);
        props.iniciar();
    }

    const handleStop = (stopped) => {
        setRunning(stopped);
        props.parar();
    }

    const handleRestart = (restarted) => {
        setRunning(restarted);
        props.reiniciar();
    }


    if (running) {
        return (
            <div className = 'containerBotoes'>
            <BotaoParar onClick={handleStop} />
            <BotaoReiniciar onClick={handleRestart} />
        </div>
        )
    }

    return (
        <div className = 'containerBotoes'>
            <BotaoIniciar onClick={handleStart} />
        </div>
    )
}

export default Botoes