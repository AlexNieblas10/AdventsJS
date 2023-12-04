/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

const gifts = ["tren", "oso", "pelota"]
const materials = "tronesa"

function manufacture(gifts, materials) {
	let validGifts = []

	gifts.forEach((gift) => {
		let validGift
		for (let i in gift) {
      if (materials.includes(gift[i])) {
        validGift = true
      }else{
        return validGift = false
      }
		}
		if (validGift) {
			validGifts.push(gift)
		}
	})

  return validGifts
}

console.log(manufacture(gifts, materials))
