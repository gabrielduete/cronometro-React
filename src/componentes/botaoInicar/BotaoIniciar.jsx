import React from 'react'

import { FaPlay } from "react-icons/fa"

function BotaoIniciar(props){
    return (
        <button onClick = {props.iniciar}>
            <FaPlay />
        </button>   
    )
}

export default BotaoIniciar