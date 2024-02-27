const person = {
    name: 'Madiane',
    lastName: 'Cavalcante'
} ;

const media = prompt("Digite sua nota aqui")

const mediaFinal = Number(media)
// const calculationOfBimonthlyNotes = (9 + 10 + 4 + 5) / 4

// const mediaFinal = calculationOfBimonthlyNotes.toFixed(1)

function nota() {

} if (mediaFinal >= 6) {
    alert(`Parabéns ${person.name} ${person.lastName}, sua nota é ${mediaFinal}`)
   // console.log(`Parabéns ${person.name} ${person.lastName}, sua nota é ${mediaFinal}`)
} else {
    alert(`Que triste ${person.name} ${person.lastName}, sua nota é ${mediaFinal}`)
  //  console.log(`Que triste ${person.name} ${person.lastName}, sua nota é ${mediaFinal}`)
} 

nota()