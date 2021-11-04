import React from 'react'

import { FaPlay } from "react-icons/fa"

function BotaoIniciar(props){

    const handleStart = () => {
        props.onClick(true);
    }

    return (
        <button onClick = {handleStart}>
            <FaPlay />
        </button>   
    )
}

export default BotaoIniciar