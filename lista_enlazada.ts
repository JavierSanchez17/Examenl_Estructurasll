import { Farmacia } from "./farmacia";

export class Nodo{
    constructor(
        private data: Farmacia,
        private prev: Nodo | null = null,
        private next: Nodo | null = null
    ){}

    public getData(): Farmacia{
        return this.data
    }

    public getPrev(): Nodo | null{
        return this.prev
    }

    public modPrev(previo: Nodo | null): void{
        this.prev = previo
    }

    public getNext(): Nodo | null{
        return this.next
    }

    public modNext(siguiente: Nodo | null): void{
        this.next = siguiente
    }
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
            newNode.modPrev(this.tail);
            this.tail.modNext(newNode);
            this.tail = newNode;
        }
    }

    public search(carnet: String): Farmacia | null{
        let current = this.head;
        while (current){
            if (current.getData().getCode() == carnet){
                return current.getData();
            }
        }
        return null;
    } 

    public print(): string{
        if (!this.head) return "No hay productos registrados";
        let result: string = "";
        let current: Nodo | null = this.head;

        while (current){
            if (current.getNext() == null){
                result += current.getData();
            }
            else{
                result += current.getData() + "\n" + "-------------" + "\n";
            }
            current = current.getNext();
        }
        return result;
    }
}