import { Telefone, Cliente, Endereco, Empresa } from "ri4-modulo";

let tel1 = new Telefone(11, 999998888);
let tel2 = new Telefone(21, 988887777);
let tel3 = new Telefone(31, 977776666);
let tel4 = new Telefone(41, 966665555);
let tel5 = new Telefone(51, 955554444);
let tel6 = new Telefone(61, 944443333);

let end1 = new Endereco('SP', 'São Paulo', 'Rua A', 25);
let end2 = new Endereco('SP', 'São Pedro', 'Rua X', 200);
let end3 = new Endereco('RJ', 'São Longinho', 'Rua 3', 12);
let end4 = new Endereco('MG', 'Belo Horizonte', 'Av. Central', 1000);
let end5 = new Endereco('RS', 'Porto Alegre', 'Av. Ipiranga', 777);
let end6 = new Endereco('PR', 'Curitiba', 'Rua das Flores', 321);

let cli1 = new Cliente('João Silva', '123.456.789-00', end1);
let cli2 = new Cliente('João Silva Correia', '213.546.879-00', end2);
let cli3 = new Cliente('João Silva Moura', '132.465.798-00', end3);
let cli4 = new Cliente('Pedro', '321.654.987-00', end4);
let cli5 = new Cliente('Maria', '231.564.897-00', end5);

cli1.addTelefone(tel1);
cli1.addTelefone(tel2);

cli2.addTelefone(tel2);
cli2.addTelefone(tel3);

cli3.addTelefone(tel3);
cli3.addTelefone(tel4);

cli4.addTelefone(tel4);
cli4.addTelefone(tel5);

cli5.addTelefone(tel5);
cli5.addTelefone(tel6);

let emp1 = new Empresa('IFood Soluções em Tecnologia LTDA', 'IFood', '12.345.678/0001-90', end6);

emp1.addCliente(cli1);
emp1.addCliente(cli2);
emp1.addCliente(cli3);
emp1.addCliente(cli4);
emp1.addCliente(cli5);

emp1.addTelefone(tel6);
emp1.addTelefone(tel1);

console.log(emp1.detalhes());