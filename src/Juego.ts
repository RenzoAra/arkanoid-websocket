import {Jugador} from './jugador'


export class Juego{

    public tablapuntaje : Array<Jugador> = []
    constructor (){
    }

    public crearNombreInvitado(){}

    public instanciarinvitado(){}
    
    public nuevoJugador(nombre : string){
        this.tablapuntaje.push(new Jugador(nombre))
    }

    public añadirJugador(p : Jugador){
        this.tablapuntaje.push(p)
    }
    
    public ranking(){
    }

    public buscarJugadorPorNombre(nombre : string){
        for(let i = 0; i < this.tablapuntaje.length; i++){
            if(this.tablapuntaje[i].nombre == nombre){
                return this.tablapuntaje[i]
            }
        }
        return null
    }

    public sumarPuntaje(nombre : string){
        this.buscarJugadorPorNombre(nombre).sumarPuntaje();
    }

}export default Jugador
