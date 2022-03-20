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

  insertarDesabilitado = false

  tituloObligatorio = true
  companiaObligatoria = true
  minValoracionMedia = true
  maxValoracionMedia = true

  constructor() { 
    let videojuego:Videojuego = new Videojuego("Watch Dogs: Legion", "Ubisoft", 4)
    this.listaVideoJuegos.push(videojuego)
  }

  public insertar(){
    if(!this.hayErrores()){
      this.videojuego = new Videojuego(this.titulo, this.compania, this.valoracionMedia)
      console.log(`Insertando videojuego: ${this.videojuego.toString()}`)
      this.listaVideoJuegos.push(this.videojuego)
      console.log("Videojuego insertado")
    }
  }

  public hayErrores():boolean{
    let error:boolean=false
    if(this.titulo.trim().length==0){
      this.tituloObligatorio=false
      error=true
    }
    if(this.compania.trim().length==0){
      this.companiaObligatoria=false
      error=true
    }
    if(this.valoracionMedia < 0){
      this.minValoracionMedia=false
      error=true
    }
    if(this.valoracionMedia > 5){
      this.maxValoracionMedia=false
      error=true
    }
    return error
  }

  ngOnInit() {
    
  }
  
}





