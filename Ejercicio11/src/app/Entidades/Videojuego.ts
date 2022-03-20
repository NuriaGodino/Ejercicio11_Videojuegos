export class Videojuego{
    private _id: number = 0;

    private static contadorID:number = 1

    constructor(public titulo:string, public compania:string, public valoracionMedia:number){
        this._id = Videojuego.contadorID++
        this.titulo = titulo
        this.compania = compania
        this.valoracionMedia = valoracionMedia
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public toString():string{
        return `ID: ${this._id}, Nombre: ${this.titulo}, Compañia: ${this.compania}, Valoracion media: ${this.valoracionMedia}`
    }
}