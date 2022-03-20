import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../Entidades/Videojuego';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit {
  
  listaVideoJuegos:Videojuego[] = []
  videojuego:Videojuego | null = null

  id:number = 0
  titulo:string = ""
  compania:string = ""
  valoracionMedia:number = 0

  constructor() { 
    let videojuego:Videojuego = new Videojuego("Watch Dogs: Legion", "Ubisoft", 4)
    this.listaVideoJuegos.push(videojuego)
  }



  public insertar(){
      this.videojuego = new Videojuego(this.titulo, this.compania, this.valoracionMedia)
      console.log(`Insertando videojuego: ${this.videojuego.toString()}`)
      this.listaVideoJuegos.push(this.videojuego)
      console.log("Videojuego insertado")
    
  }

  ngOnInit() {
    
  }
  
}





