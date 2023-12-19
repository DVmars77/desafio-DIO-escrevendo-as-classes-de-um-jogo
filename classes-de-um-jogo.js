atacar()

function atacar(){

let userName = prompt("Digite o nome do seu heroi: ")
let idade = (parseInt(prompt("Digite a idade do seu heroi: ")))
let tipo =  (parseInt(prompt("Digite o numero da classe que voce desejar: , 1 para guerreiro, 2 para mago, 3 para arqueiro e 4 para viking ")))


if (tipo === 1 ){
	console.log(userName + " escolheu o tipo guerreio que atacou usando espada")
}

if (tipo === 2 ){
	console.log(userName + " escolheu o tipo mago que atacou usando magia")
}

if (tipo === 3 ){
	console.log(userName + " escolheu o tipo arqueiro que atacou usando arco e flecha")
}

if (tipo === 4 ){
	console.log( userName + " escolheu o tipo viking que atacou usando machado")
}
}
