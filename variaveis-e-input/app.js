const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stout
})

const minhaConstante = 'Cachorro'
console.log(minhaConstante)

let leituraDeCampo
readLine.question('Por favor digite alguma coisa', input => {
  leituraDeCampo = input
  console.log(`o usuario digitou: ${leituraDeCampo}`)
})

