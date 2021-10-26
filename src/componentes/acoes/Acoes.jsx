import React from 'react'

import { FaRegPauseCircle } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaRedoAlt } from "react-icons/fa"

import './style.css'

function Acoes(props){
    return (
        <div className = 'containerBotoes'>
            <button 
              onClick={props.parar} 
              className={props.running === 1 ? 'show': 'hide'}
            >
              <FaRegPauseCircle/>
            </button>

            <button 
              onClick={props.iniciar} 
              className={props.running === 0 || props.running === 2 ? 'show': 'hide'}
            >
              <FaPlay/>
            </button>

            <button 
              onClick={props.reiniciar} 
              className={props.running === 2 ? 'show': 'hide'}
            >
              <FaRedoAlt/>
            </button>
        </div>
    )
}

export default Acoes;