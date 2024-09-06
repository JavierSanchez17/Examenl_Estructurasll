import { Farmacia } from "./farmacia";

export class Nodo{
    constructor(
        public data: Farmacia,
        public prev: Nodo | null = null,
        public next: Nodo | null = null
    ){}
    }

export class DoubleLinkedList{
    private head: Nodo | null = null;
    private tail: Nodo | null = null;

    public insert(data: Farmacia): void{
        const newNode = new Nodo(data);
        if (!this.tail){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    public search(carnet: String): Farmacia | null{
        let current = this.head;
        while (current){
            if (current.data.getCode() == carnet){
                return current.data;
            }
        }
        return null;
    } 

    public print(): string{
        if (!this.head) return "No hay productos registrados";
        let result: string = "";
        let current: Nodo | null = this.head;

        while (current){
            if (current.next == null){
                result += current.data;
            }
            else{
                result += current.data + "\n" + "-------------" + "\n";
            }
            current = current.next;
        }
        return result;
    }
}