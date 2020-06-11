import {Jugador} from './jugador'


export class Juego{
    
    private player = new Jugador();

    private tablapuntaje : Array<Jugador> = [this.player]
    
    constructor (){
    }
    
    private iniciarpartida(){}
    
    private instanciarinvitado(){}
    
    private instanciarjugador(){}
    
    private ranking(){}

    private buscarjugadorpornombre(nombre : string){}

    public sumarpuntaje(jugador : string){
        this.buscarjugadorpornombre(jugador).sumarpuntaje();
    }
}
