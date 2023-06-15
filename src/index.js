// import $ from  'jquery'
// import {getPokemon} from './api'

// obtenerPokemon()

// function obtenerPokemon(){
//     let random = numeroAleatorio(150)+1

//     let pokemon = getPokemon(1)
//     pokemon.then((res)=>res.json())
//     .then((res2)=>{
//         console.log(res2)
//         let {name,sprites,stats,types}=res2
//     })
// }

// //funcion n(umero aleatorio
// function numeroAleatorio(max){
//     return Math.floor(Math.random()*max)
// }

// //llenar informacion pokemon

// function llenarInformacion(name,sprites,stats,types){
//     let input= document.getElementById("input_pokemon")
//     input.placeholder = "ejemplo: "+name

//     let tabla = ('<table class="table">  <tr><td> ${name} </td></tr>')


// }

const pokemonesCapturados = [];

  fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  .then(response => response.json())
  .then(data => {
    data.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
            pokemonesCapturados.push(pokemonData)
        })
        .catch(error => {
          console.log('Ha ocurrido un error:', error);
        });
    });
    localStorage.setItem("listaPokemones",JSON.stringify(pokemonesCapturados))
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });


  const pokemonName = 'pikachu';

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => response.json())
  .then(data => {
    console.log('Nombre:', data.name);
    console.log('Altura:', data.height);
    console.log('Peso:', data.weight);
    console.log('Habilidades:', data.abilities.map(ability => ability.ability.name).join(', '));
    console.log('Tipo:', data.types.map(type => type.type.name).join(', '));
    console.log('Estadísticas:');
    data.stats.forEach(stat => {
      console.log(`${stat.stat.name}: ${stat.base_stat}`);
    });
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });


