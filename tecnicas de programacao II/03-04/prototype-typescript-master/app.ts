import Objeto from "./objeto";

let obj1 = new Objeto()
obj1.atributo1 = "arroz"
obj1.atributo2 = "feijão"

let clone1 = obj1.clonar()
console.log(clone1.atributo1)
console.log(obj1 === clone1);
