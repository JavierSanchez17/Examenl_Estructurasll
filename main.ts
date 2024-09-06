import { HashTable } from "./hashtable";

let tablaHash: HashTable = new HashTable;
tablaHash.insert("P001", "Pepto-Bismol", 50, 65)
tablaHash.insert("P002", "Pastilla", 12, 15)
tablaHash.insert("P003", "Jarabe", 60, 68)
tablaHash.insert("P004", "Medicina2", 14, 16)
tablaHash.insert("P005", "Medicina3", 80, 88)
tablaHash.insert("P006", "Medicina4", 90, 91)
tablaHash.insert("P007", "Medicina5", 100, 105)
tablaHash.insert("P001", "Medicina6", 78, 80) // Valor repetido
tablaHash.insert("P009", "Medicina7", 32, 35)
tablaHash.insert("P010", "Medicina8", 52, 60)

console.log("FARMACIA LA BENDICION:\n")
tablaHash.print()

let claveABuscar: string = "P001";
console.log("El producto buscado es: \n" + tablaHash.search(claveABuscar))
