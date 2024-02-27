const numberOne = Number(prompt('Digite seu primeiro número'));

if (numberOne < 0) {
  alert('NumberOne Precisa ser um número maior que zero')
}

if (isNaN(numberOne)) {
  alert('Você precisa colocar um número')
}

const numberTwo = Number(prompt('Digite seu segundo número'));

if (numberTwo < 0) {
  alert('NumberTwo Precisa ser um número maior que zero')
}

if (isNaN(numberTwo)) {
  alert('Você precisa colocar um número')
}

function division() {
  const share = numberOne / numberTwo
  return alert(`O valor da divisão é ${share}`)
}

division()