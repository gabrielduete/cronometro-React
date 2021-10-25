import React from 'react'

import { FaRedoAlt } from "react-icons/fa"

function BotaoReiniciar(props){
    return (
        <button onClick = {props.reiniciar}>
            <FaRedoAlt />
        </button>
    )   
}

export default BotaoReiniciar