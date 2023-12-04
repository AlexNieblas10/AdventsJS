/* 
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
*/

function findFirstRepeated(gifts) {
	let giftsIterables = []
	let repeated

	for (let gift in gifts) {
		if (giftsIterables.includes(gifts[gift])) {
			repeated = gifts[gift]
      break
		} else {
			giftsIterables.push(gifts[gift])
		}
	}

	return repeated != undefined ? repeated : -1
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))
