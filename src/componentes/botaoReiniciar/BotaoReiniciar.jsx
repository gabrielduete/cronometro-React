import React from 'react'

import { FaRedoAlt } from "react-icons/fa"

function BotaoReiniciar(props){

    const handleRestart = () => {
        props.onClick(false);
    }

    return (
        <button onClick = {handleRestart}>
            <FaRedoAlt />
        </button>
    )   
}

export default BotaoReiniciar