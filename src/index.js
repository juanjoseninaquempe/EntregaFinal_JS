// import $ from  'jquery'
// import {getPokemon} from './api'

// const { data } = require("jquery");

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

let carrito = [];
let pokemonesCapturados = [];

const tabla = document.getElementById('items');
const select = document.getElementById('pokemones');


  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
	.then((response) => response.json())
	.then((data) => {
    console.log(data)
		pokemonesCapturados = data.results;
		localStorage.setItem("ListaPokemones", JSON.stringify(pokemonesCapturados));
		console.log(pokemonesCapturados);
		pokemonesCapturados.forEach((pokemoncito) => {
			const option = document.createElement("option");
			option.textContent = `${pokemoncito.name}`;
			option.value = `${pokemoncito.url}`; ///el indice donde se encuentra este producto
      select.appendChild(option);
		});
	});
 
  console.log(select);

   const formulario = document.getElementById('formulario');

         formulario.addEventListener("submit",(e) => {
         e.preventDefault();
          const pokemonElegido= select.value;
          console.log(pokemonElegido);
          fetch(pokemonElegido)
          .then((response2) => response2.json())
          .then((data2) => {
            console.log(data2.species);
            carrito.push(data2.species);
            console.log(carrito);
            localStorage.setItem("carrito",JSON.stringify(carrito));
            let imagen= document.getElementById('pokemon_img')
            imagen.src= data2.sprites.other.dream_world.front_default 


            let div =document.getElementById('datos_pokemon')
            // let div=$('.datos_pokemon')
            div.empty()

            let tabla1 = (`<table class="table">`)

            for(let i =0; i<data2.stats.length; i++) {
              tabla1+=('<tr>')
              tabla1+=(`<td>${data2.stats[i].stat.name}</td>`)
              tabla1+=(`<td>${data2.stats[i].base_stat}</td>`)
              tabla1+=('</tr>')
            }
            tabla1+=('</table>')
            div.append(tabla1)
            // let tabla =document.getElementById()
            renderizarTabla();
          })
         })

  

function renderizarTabla() {
   tabla.innerHTML = "";
  carrito.forEach((prod) => {
    tabla.innerHTML += `
    <tr>
      <td>${prod.name}</td>
      <td>${prod.url}</td>
      <td></td>
    </tr>
`;
  });
}

 

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
