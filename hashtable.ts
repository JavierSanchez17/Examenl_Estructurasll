import { Farmacia } from "./farmacia";
import { DoubleLinkedList } from "./lista_enlazada";

export class HashTable {
    private size: number; // 10 Productos
    private slots: DoubleLinkedList[];

    constructor(){
        this.slots = new Array(18);
        this.size = 18;
        for (let i = 0; i < this.size; i++) {
            this.slots[i] = new DoubleLinkedList();
        }
    }

    private hash(key: number): number{
        return key % this.size;
    }

    public insert(code: string, name: string, costo: number, venta: number): void{
        let newProduct: Farmacia = new Farmacia(code, name, costo, venta)
        let exceptP = code.split("P")
        let codeInt: number = Number(exceptP[1])
        let index: number = this.hash(codeInt);
        this.slots[index].insert(newProduct)
    }

    public search(code: string){
        let exceptP = code.split("P")
        let codeInt: number = Number(exceptP[1])
        let search_data: number = this.hash(codeInt);
        return this.slots[search_data].search(code)
    }

    public print(): void{
        for (let i = 0; i<18; i++)
            console.log(this.slots[i].print() + "\n" + "----------" + "\n")
    }
}