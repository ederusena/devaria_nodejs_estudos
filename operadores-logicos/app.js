const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stout
})

console.log("Esse programa vai checar se voce eh maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart")
console.log("Alem de suas verficicações, precisamos verificar se vc esta na lista de presença do horario")

readLine.question('Qual o ano do seu nascimento?', ano => {
  if (ano > 2004) {
    console.log('Voce nao tem 18 anos')
  }else {
    readLine.question('Voce tem habilitacao? (Sim/Nao)', temHabilitacao => {
      if (!(temHabilitacao.toUpperCase() === "SIM")) {
        console.log("Vc nao tem habilitacao para entrar no kart!")
      }else {
        readLine.question('Qual seu nome?' nome => {
          switch (nome) {
            case 'Eder':
              console.log(`Bem vindo ${nome}`)
              break;
            case 'Doug':
              console.log(`Bem vindo ${nome}`)
              break;
            default:
              console.log(`Seu nome nao foi identificado na lista`)
              break;
          }
        })
      }
    })
  }
})
