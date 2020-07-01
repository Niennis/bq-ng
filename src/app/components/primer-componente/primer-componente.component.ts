import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'primer-componente',
  // template: `
  //   <br>
  //   <br>
  //   <h2>{{ titulo }}</h2> 
  //   <p>{{ comentario }}</p>
  //   <p>{{ year }}</p>
  // `,
  templateUrl: './primer-componente.component.html'
  // mostrar el valor de la propiedad acá se llama "binding por interpolación"
  // se puede usar el template o el templateUrl: uno crea la vista acá, el segundo en un html, así queda más fácil para corregir errores.
})

export class PrimerComponente implements OnInit{

  public titulo: string; // propiedades.
  // Se le puede pasar el tipo de dato
  // Se pueden declarar fuera del constructor, pero es mejor definirlas dentro del constructor.
  public comentario: string;
  public year: number;

  constructor(){
    this.titulo = 'Mi primer componente.';
    this.comentario = 'Hola... adiós.';
    this.year = 2020;
  }

  ngOnInit(): void {
  }
}