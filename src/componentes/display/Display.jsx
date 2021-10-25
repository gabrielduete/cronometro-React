import React from 'react'
import './style.css'

function Display(props){
    return(
        <div className = 'containerTempo'>
            <div className = 'circuloBranco'>
                <p>
                    {/* Cada props passa por uma verificação, onde se o valor for menor que 10
                    ele será impresso da seguinte forma: 05, 06, 07... ao invés de 5, 6, 7... */}
                    {props.horas < 10 ? "0" + props.horas : props.horas}:
                    {props.minutos < 10 ? "0" + props.minutos : props.minutos}:
                    {props.segundos < 10 ? "0" + props.segundos : props.segundos}
                </p>
            </div>
        </div>
    )
}

export default Display