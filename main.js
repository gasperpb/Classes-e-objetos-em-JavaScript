/*Abstração de dados
A conjunção de herança complexa, métodos, propriedades de um objeto devem refletir adequadamente um modelo da realidade.

Exemplo */

var foo = function() {};
alert('foo é um Function: ' + (foo instanceof Function));
alert('foo.prototype é um Object: ' + (foo.prototype instanceof Object));





/*Encapsulamento
Uma maneira de agrupar os dados e os métodos que usam os dados.
É a técnica que faz com que detalhes internos do funcionamento dos métodos de uma 
classe permaneçam ocultos para os objetos. Por conta dessa técnica, o conhecimento a
 respeito da implementação interna da classe é desnecessário do ponto de vista do objeto, 
 uma vez que isso passa a ser responsabilidade dos métodos internos da classe.
Assim que uma classe é criada, seu código e seus dados, os quais são chamados 
de membros da classe, são determinados. Esses dados recebem o nome de variáveis membro ou variáveis de instância. 

Exemplo */

function ContaCorrente(codigo) {
    this.codigo = codigo; // atributo publico
    var saldo = 0.0; // atributo privado

    // metodos publicos
    this.deposita = function(valor) {
        saldo += valor;
        imprime("Depositou R$ " + valor);
    };
    this.mostraSaldo = function() {
        imprime("Saldo: " + saldo);
    };

    // metodos privados
    function imprime(msg) {
        console.log(msg);
    }
}

var c = new ContaCorrente(1234);
console.log(c.codigo);

c.deposita(1000);
c.mostraSaldo();

c.saldo = 17; // tenta mudar o saldo
c.mostraSaldo(); // continua 1000


/*Herança(Prototype)


Em OOP, herança refere-se a habilidade de um objeto acessar métodos e outras propriedades de outro objeto. 
Estes objetos então herdam essas informações de outros objetos e podem utilizá-las da forma que preferirem. 
No Javascript não temos uma herança propriamente dita, mas ela funciona através do que são chamados de protótipos, 
esta forma de herança é conhecida como herança prototípica (ou prototypal inheritance).

Exemplo: */


const meuObjeto = {
    a: 1,
    b: 2
        //meuObjeto.__proto__-->> Object.prototype--> null
}

const meuArray = [1, 2, 3, 'a', 'b', 4]
meuArray.map()

console.log(Object); //ƒ Object() { [native code] }
console.log(Array); //ƒ Array() { [native code] }
console.log(Function); //ƒ Function() { [native code] }

/*bject vem do construtor Object()
Array vem do construtor Array()
Function vem do construtor Function()
*/

















/*
*****Referências*****


Mozilla. "Core JavaScript 1.5 Guide", https://developer.mozilla.org/docs/Web/JavaScript/Guide
Wikipedia. "Object-oriented programming", http://en.wikipedia.org/wiki/Object-...ed_programming
https://www.devmedia.com.br/conceitos-encapsulamento-programacao-orientada-a-objetos/18702
https://medium.com/trainingcenter/heran%C3%A7a-e-prot%C3%B3tipos-no-javascript-2c1e60e005a2
*/