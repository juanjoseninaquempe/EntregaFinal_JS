import $ from  'jquery'
import {getPokemon} from './api'

obtenerPokemon()

function obtenerPokemon(){
    let random = numeroAleatorio(150)+1

    let pokemon = getPokemon(1)
    pokemon.then((res)=>res.json())
    .then((res2)=>{
        console.log(res2)
        let {name,sprites,stats,types}=res2
    })
}

//funcion n(umero aleatorio
function numeroAleatorio(max){
    return Math.floor(Math.random()*max)
}

//llenar informacion pokemon

function llenarInformacion(name,sprites,stats,types){
    let input= document.getElementById("input_pokemon")
    input.placeholder = "ejemplo: "+name
}