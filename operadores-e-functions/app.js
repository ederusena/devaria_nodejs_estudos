const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stout
})

const validarNumeroInformado = numero => {
  const result = Number.parseFloat(numero1)
  if(!result)
    console.log('O numero informando nao eh valido');
  return result
}

const validarOperador = operador => {
  try {
    switch(operador) {
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        return operador
      default:
        console.log("Operador invalido")
        return null
    }
  }catch (e) {
    console.log('O numero informando nao eh valido');
  }
}

readLine.question('Favor informar um numero', numero1 => {
  const numberValidado1 = validarNumeroInformado(numero1)
  if(numberValidado1) {
    readLine.question('Favor informar um numero', numero2 => {
      const numberValidado2 = validarNumeroInformado(numero2)
      if(numberValidado2) {
        readLine.question('Favor informar um Operador', operador => {
          const operadorValidado = validarOperador(operador)
          if(operadorValidado) {
            switch (operadorValidado) {
              case '+':
                console.log(`Operador selecionado + = ${numberValidado1} + ${numberValidado2} = ${numberValidado1 + numberValidado2}`)
                break;
              case '-':
                console.log(`Operador selecionado - = ${numberValidado1} - ${numberValidado2} = ${numberValidado1 - numberValidado2}`)
                break;
              case '/':
                console.log(`Operador selecionado / = ${numberValidado1} / ${numberValidado2} = ${numberValidado1 / numberValidado2}`)
                break;
              case '*':
                console.log(`Operador selecionado * = ${numberValidado1} * ${numberValidado2} = ${numberValidado1 * numberValidado2}`)
                break;
              case '%':
                console.log(`Operador selecionado % = ${numberValidado1} % ${numberValidado2} = ${numberValidado1 % numberValidado2}`)
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }

})