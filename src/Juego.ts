import {Jugador} from './jugador'
import { throws } from 'assert';


export class Juego{

    public tablapuntaje : Array<Jugador> = []
    constructor (){
    }

    public crearNombreInvitado(){
        return "Invitado "+Math.floor(Math.random() * 1001);
    }

    public añadirInvitado(){
        this.tablapuntaje.push(new Jugador(this.crearNombreInvitado()))
    }
    
    public nuevoJugador(nombre : string){
        this.tablapuntaje.push(new Jugador(nombre))
    }

    public añadirJugador(p : Jugador){
        this.tablapuntaje.push(p)
    }
    
    public ranking(){
        this.tablapuntaje.sort(function (a, b){
            return (b.puntaje - a.puntaje)
        })
        return this.tablapuntaje
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

}export default Juego
