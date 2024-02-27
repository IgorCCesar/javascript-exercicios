// const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

/*
for(let i = 0; i < nomes.length; i = i + 1) {
  console.log(nomes[i], i) 
}

function nossoForEach(arr, funcao) {
  for(let i = 0; i < arr.length; i = i + 1) {
    const itemDoArray = arr[i]
    funcao(itemDoArray, i)
  }
}

nossoForEach(nomes, function(nome, i) {
  console.log(nome, i)
})

*/

const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];
nomes.forEach(function(nome, i) {
  console.log(nome, i) 
})

nomes.map(function(nome, i) {
  console.log(nome, i) 
})

function nossoMap(arr, funcao) {
  const novoArray = [];
  for(let i = 0; i < arr.length; i = 1 + 1) {
    const itemDoArray = arr[i]
    novoArray.push(funcao(itemDoArray, i))
  }

  return novoArray;
}