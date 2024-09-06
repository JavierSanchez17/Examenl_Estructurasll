export class Farmacia{
    private codigo: string
    private nombre: string
    private costo: number
    private venta: number
    constructor (codigo: string, nombre: string, costo: number, venta: number){
        this.codigo = codigo
        this.nombre = nombre
        this.costo = costo
        this.venta = venta
    }

    public getCode(): string{
        return this.codigo
    }

    public getName(): string{
        return this.nombre
    }

    public getCosto(): number{
        return this.costo
    }

    public modCosto(nuevoCosto: number): void{
        this.costo = nuevoCosto
    }

    public getVenta(): number{
        return this.venta
    }

    public modVenta(nuevoVenta: number): void{
        this.costo = nuevoVenta
    }
    
    public toString(): string{
        return "codigo: " + this.codigo + "\n" + "Nombre: " + this.nombre + "\n" + "Costo: " + String(this.costo) + "\n" + "Venta: " + String(this.venta)
    }
}