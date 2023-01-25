// Recursive function to calculate factorial

function factorial(num){
	if (num <= 1){ return 1; }
	return num * factorial(num-1);
}
for(i=1;i<5;i++){
	let string = `${i}! = ${factorial(i)}`
	console.log(string);
}

// Array min/max
// const turtle = [
// 	1, 2, -5, 7, 9, -25, 502
// ]

// let v = { min: 0, max: 0 }

// for (let i = 0; i < turtle.length; i++) {
// 	const thisValue = turtle[i]
// 	if (thisValue < v.min) { v.min = thisValue } if (thisValue > v.max) { v.max = thisValue }
// }

// console.log(`min:${v.min}, max:${v.max}`)