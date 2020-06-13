import { expect } from "chai";
import Jugador, { Juego } from "../src/Juego";

describe('Juego', function() {
  it('nuevoJugador', function() {
    let j = new Juego()
    j.nuevoJugador("Jose")
    expect(j.tablapuntaje.length).equal(1);
  });
});

describe('Juego', function() {
  it('añadirJugador', function() {
    let j = new Juego()
    let p = new Jugador("Jose")
    j.añadirJugador(p)
    expect(j.tablapuntaje.length).equal(1);
  });
});

describe('Juego', function() {
    it('buscarJugadorPorNombre', function() {
      let j = new Juego()
      let p = new Jugador("Jose")
      j.añadirJugador(p)
      expect(j.buscarJugadorPorNombre("Jose")).equal(p);
    });
  });

  describe('Juego', function() {
    it('buscarJugadorPorNombre', function() {
      let j = new Juego()
      let p = new Jugador("Jose")
      j.añadirJugador(p)
      expect(j.buscarJugadorPorNombre("luis")).equal(null);
    });
  });

  describe('Juego', function() {
    it('sumarPuntaje', function() {
      let j = new Juego()
      j.nuevoJugador("Jose")
      j.sumarPuntaje("Jose")
      expect(j.buscarJugadorPorNombre("Jose").puntaje).equal(1);
    });
  });

  describe('Juego', function() {
    it('sumarPuntaje20', function() {
      let j = new Juego()
      j.nuevoJugador("Jose")
      for(let i = 0; i < 20; i++){
        j.sumarPuntaje("Jose")
      }
      expect(j.buscarJugadorPorNombre("Jose").puntaje).equal(20);
    });
  });