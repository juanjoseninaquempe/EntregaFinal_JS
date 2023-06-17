/*
* clase de item del carrito 
 */
class pokecarrito {
    ///atributos
    pokemonesventa; /// de tipo Producto
    cantidad; /// de tipo Number

    ///constructor
    constructor(pokemonesventa, cantidad) {
        this.pokemonesventa = pokemonesventa;
        this.cantidad = cantidad;
    }
    
    ///metodos
    precioTotal() {
        return this.cantidad * this.pokemonesventa.precio;
    }
}