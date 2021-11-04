import React from 'react'

import { FaRegPauseCircle } from "react-icons/fa"

function BotaoParar(props){

    const handleStop = () => {
        props.onClick(false);
    }

    return (
        <button onClick = {handleStop}>
            <FaRegPauseCircle />
        </button>
    )
}

export default BotaoParar