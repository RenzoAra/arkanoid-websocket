export class Jugador{
    
    nombre : string
    puntaje : number
    
    constructor (nombre : string){
        this.nombre = nombre
        this.puntaje = 0
    }

    public sumarPuntaje(){
        this.puntaje = this.puntaje + 1
    }
    
}export default Jugador