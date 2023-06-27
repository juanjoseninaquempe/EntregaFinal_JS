

let carrito = [];
let pokemonesCapturados = [];

const tabla = document.getElementById('items');
const select = document.getElementById('pokemones');
let div =document.querySelector('.datos_pokemon')
let tabla1= document.createElement("table")
const total = document.getElementById('total');



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
            const pokemoncitoC= {...data2.species}
             pokemoncitoC['cantidad']=1;

             const indiceCarrito= carrito.findIndex((poke) => {return poke.name == pokemoncitoC.name})
            console.log(indiceCarrito);

             if(indiceCarrito != -1){
              carrito[indiceCarrito].cantidad++;
             }else{
            carrito.push(pokemoncitoC);
             }
            console.log(carrito);



            localStorage.setItem("carrito",JSON.stringify(carrito));
            let imagen= document.getElementById('pokemon_img')
            imagen.src= data2.sprites.other.dream_world.front_default 

            tabla1.innerHTML=""

            for(let i =0; i<data2.stats.length; i++) {
              const p =document.createElement("p")
              p.innerHTML= `${data2.stats[i].stat.name} : ${data2.stats[i].base_stat} `
              tabla1.appendChild(p)
            }

            div.append(tabla1)
            renderizarTabla();
          })
         })

  

function renderizarTabla() {
   tabla.innerHTML = "";
   total.innerHTML = "";
  carrito.forEach((prod) => {
    tabla.innerHTML += `
    <tr>
      <td>${prod.name}</td>
      <td>${prod.cantidad}</td>
      <td></td>
    </tr>
    `;
  });
  total.innerHTML = carrito.reduce((acumulador,item) => acumulador + item.cantidad,0)

}