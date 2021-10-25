import React from 'react'

import { FaRegPauseCircle } from "react-icons/fa"

function BotaoParar(props){
    return (
        <button onClick = {props.parar}>
            <FaRegPauseCircle />
        </button>
    )
}

export default BotaoParar