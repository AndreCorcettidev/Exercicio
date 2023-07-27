alert('Digite dois números para fazer operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.')
let num1 = prompt('Digite o primeiro número.')
let num2 = prompt('Digite o segundo número.')

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2
const subtração = num1 - num2
const multiplicação = num1 * num2
const divisão = num1 / num2
const restoDiv = num1 % num2
const parOuImpar = num1 % num2 == 0
const NumIguais = num1 === num2


alert('resultado da soma é igual à ' + soma)
alert('resultado da subtração é igual à ' + subtração)
alert('resultado da multiplicação é igual à ' + multiplicação)
alert('resultado da divisão é igual à ' + divisão)
alert('resultado do resto da divisão é igual à ' + restoDiv)
