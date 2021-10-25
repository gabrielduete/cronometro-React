import React, { useState } from "react"
import './style.css'

import Display from "../display/Display"
import Botoes from '../botoes/Botoes'

function Cronometro(){

    // State com os valores do cronômetro
    const [tempo, setTempo] = useState({
        stateHoras: 0,
        stateMinutos: 0,
        stateSegundos: 0,
    })

    // Definindo state para guardar o setInterval
    const [intervalo, setIntervalo] = useState()

    // State para não deixar o usuário spammar clicks para iniciar o cronômetro 
    // e ele não bugar :p
    const [clicou, setClicou] = useState(false)

    // Variáveis para serem atribuidas como valores para os states dos cronômetros
    let segundos = tempo.stateSegundos
    let minutos = tempo.stateMinutos
    let horas = tempo.stateHoras

    // Função que increimenta e retorna os states atualizados
    const incrementa = () =>{

        if(segundos === 60){
            minutos ++
            segundos = 0
        }
        if(minutos === 60){
            horas ++
            minutos = 0
        }

        segundos++
        return setTempo({
            stateHoras: horas,
            stateMinutos: minutos,
            stateSegundos: segundos,
        })
    }

    // Função responsável por rodar a função incrementa a cada 1segundo
    const iniciar = () =>{
        if(!clicou){
            setIntervalo(setInterval(() => {
                incrementa()
            }, 1000))
        }

        setClicou(true)
    }

    // Função responsvel por pausar o cronômetro
    const parar = () => {
        clearInterval(intervalo)
        setClicou(false)
    }
    
    // Função responsável por zerar os valores do cronômetro
    const reiniciar = () => {
        setTempo({
            stateHoras: 0,
            stateMinutos: 0,
            stateSegundos: 0,
        })

        horas = minutos = segundos = 0

        parar()
    }

    return (
        <section className = 'cronometro'>
            <h1>Cronômetro</h1>
            
            <Display 
                horas = {tempo.stateHoras}
                minutos = {tempo.stateMinutos}
                segundos = {tempo.stateSegundos}

            />

            <Botoes 
                iniciar = {iniciar}
                parar = {parar}
                reiniciar = {reiniciar}
            />
        </section>
    )
}

export default Cronometro