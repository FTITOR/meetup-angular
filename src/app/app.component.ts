import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',                  // Nombre que recibira el componente en el template: <app-component></app-component>
  templateUrl: './app.component.html',   // path del template que empleara este component
  styleUrls: ['./app.component.scss']    // path de la hoja de estilos que empleara este component
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy { // OnChanges, OnInit, AfterViewInit, OnDestroy son interfaces que implementa la clase para tener un comportamiento

  // Declaración de VARIABLES. Es importante declarar todas las variables publicas y privadas  
  // en la parte superior de la clase, con la finalidad de tener un orden en nuestro código.

  // Variables
  public title = 'meetup-angular'; // Forma para declarar una variable publica
  private id: number = 0;          // Forma para declarar una variable privada

  // un constructor es donde se inicializa un objeto,
  // aca se asignan los valores iniciales del nuevo objeto.
  // (ES LO PRIMERO QUE SE EJECUTA AL INICIAR LA CLASE)
  constructor() {
    // ---> PRIMERO EN EJECUTARSE CRONOLOGICAMENTE
    // console.log() muestra mensajes en la consola del navegador (para abrir la consola se usa la tecla F12)
    console.log(`%c BY: ${DEVELOPER} FROM: app-component; ID: ${this.id++}. constructor()`, STYLES_FOR_LOGS);
    this.saludo('R2D2', 40); // ----> EJEMPLO DE COMO INVOCAR UN METODO
  }

  ngOnInit() {
    // ---> SEGUNDO EN EJECUTARSE CRONOLOGICAMENTE
    console.log(`%c BY: ${DEVELOPER} FROM: app-component; ID: ${this.id++}. ngOnInit()`, STYLES_FOR_LOGS);
  }

  ngAfterViewInit() {
    // ---> TERCERO EN EJECUTARSE CRONOLOGICAMENTE
    console.log(`%c BY: ${DEVELOPER} FROM: app-component; ID: ${this.id++}. ngAfterViewInit()`, STYLES_FOR_LOGS);
  }

  ngOnChanges() {
    // ---> SE EJECUTA CUANDO LOS PARAMETROS DE ENTRADA (INPUTS) DE LA CLASE CAMBIAN DE VALOR
    console.log(`%c BY: ${DEVELOPER} FROM: app-component; ID: ${this.id++}. ngOnChanges()`, STYLES_FOR_LOGS);
  }

  ngOnDestroy() {
    // ---> SE EJECUTA CUANDO SE FINALIZA LA CLASE
    console.log(`%c BY: ${DEVELOPER} FROM: app-component; ID: ${this.id++}. ngOnDestroy()`, STYLES_FOR_LOGS);
    this.despedida('Luke', 18); // ----> EJEMPLO DE COMO INVOCAR UN METODO
  }

  // Ejemplo de un metodo publico, este metodo se puede invocar desde esta clase u otro lado.
  saludo(nombre: string, edad: number) {
    const SALUDO = `Hola ${nombre}, tienes ${edad} años`;
    console.log(SALUDO);
  }

  // Ejemplo de un metodo privado, este metodo solo se puede mandar a llamar en esta clase
  private despedida(nombre: string, edad: number) {
    const DESPEDIDA = `Adios ${nombre}, tu edad es ${edad} años`;
    console.log(DESPEDIDA);
  }

}

// Constantes
export const DEVELOPER: string = 'FTITOR';
export const STYLES_FOR_LOGS = 'background: #000000 ; color: #f2ff00';
