 // Callbacks

const second = () => {
  setTimeout(() => {
    console.log('O download da imagem leva 2 segundos');
  }, 2000);
}

const first = () => {
  console.log('A primeira função foi chamada');
  second()
  console.log('O código ainda está em execução')
}

first();

// Promises 

const getEmployeeIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([2,4,5,9]);
  }, 1000)
});