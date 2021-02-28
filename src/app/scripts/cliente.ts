export class Cliente{
    protected nombre:string;
    protected apellido:string;
    protected direccion:string;

    constructor(nombre:string,apellido:string,direccion:string)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
    }
}