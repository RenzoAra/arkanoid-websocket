export class Jugador{
    
    nombre : string
    puntaje : number = 0
    
    constructor (nombre : string){
        this.nombre = nombre
    }

    public sumarPuntaje(){
        this.puntaje = this.puntaje + 1
    }
    
}export default Jugador