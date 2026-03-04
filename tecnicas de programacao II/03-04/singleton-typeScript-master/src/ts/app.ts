import Exemplo1 from "./Exemplo1";

import Exemplo2 from "./Exemplo2";

let obj1 = Exemplo1.obterInstancia()
let obj2 = Exemplo1.obterInstancia()

console.log(obj1 === obj2);

obj1 = Exemplo2.obterInstancia()
obj2 = Exemplo2.obterInstancia()

console.log(obj1 === obj2);