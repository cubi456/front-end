export class Cliente{
    private _nombre:string;
    private _apellido:string;
    private _direccion:string;

    constructor(nombre:string,apellido:string,direccion:string)
    {
        this._nombre=nombre;
        this._apellido=apellido;
        this._direccion=direccion;
    }

    get nombre():string
    {
        return this._nombre;
    }

    get apellido():string
    {
        return this._apellido;
    }
    get direccion():string
    {
        return this._direccion;
    }
}