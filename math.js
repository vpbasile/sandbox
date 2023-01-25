function randomBounded(min, max) {

	const rando = Math.random();
	// console.log(`rando = ${rando}`)
	return min + Math.floor(max * rando);
}

// const num1 = 1, num2 = 2
// console.log(`randomBounded(${num1},${num2}=${randomBounded(num1, num2)})`)

function rollover(value, limit) {
	let tempValue = value;
	while (tempValue < 0) {
		console.log(`value was ${tempValue}`)
		tempValue += limit 
		tempValue += 1;
		console.log(`now it is ${tempValue}`)
	};
	while (tempValue > limit) {
		console.log(`value was ${tempValue}`)
		tempValue -= limit
		tempValue -= 1
		console.log(`now it is ${tempValue}`)
	};
	return (tempValue);
}

const limit = 5;
for (let a = -2*limit; a < 2*limit; a++) {
	console.log(`rollover(${a},${limit}) = ${rollover(a, limit)}`)
}