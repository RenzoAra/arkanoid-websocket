import {Jugador} from './jugador'


export class Juego{

    private tablapuntaje : Array<Jugador>
    
    constructor (){
    }
    
    private iniciarPartida(){}
    
    private crearNombreInvitado(){}

    private instanciarinvitado(){}
    
    private instanciarJugador(nombre : string){
        this.tablapuntaje.push(new Jugador(nombre))
    }
    
    private ranking(){
    }

    private buscarJugadorPorNombre(nombre : string){
        for(let i = 0; i < this.tablapuntaje.length; i++){
            if(this.tablapuntaje[i].nombre = nombre){
                return this.tablapuntaje[i]
            }
        }
    }

    public sumarPuntaje(nombre : string){
        this.buscarJugadorPorNombre(nombre).sumarPuntaje();
    }

}export default Jugador
