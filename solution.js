let addThis2 = function (num) {
	if (num > 9) {
		numArrStr = num.toString().split('');
		const numArrNum = numArrStr.map((num) => new Number(num));
		const sum = numArrNum.reduce((accumulator, i) => accumulator + i);
		return sum;
	} else {
		return num;
	}
};

// NESTED LOOPS
const addThis = function (num) {
  let numStr = num.toString();
  let sum = 0;
  if(numStr.length <= 1) { 
    return num;
  }
  while (numStr.length > 1) {
    sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    numStr = sum.toString();
  }
  return sum;
};

// RECURSION
let addThis = (num) => {
  let array = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let toNum = Number(array[i]);
    sum += toNum;
  }
  if (sum >= 10) {
    addThis(sum);
  } else {
    return sum
  }
}

addThis(5678);

// RECURSION #2
// let addThis = function (num) {
//   const numStr = num.toString();
//   if (numStr.length <= 1) {
//     return num;
//   }
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
//   }
//   return addThis(sum);
// };
console.log(addThis(38));
console.log(addThis(543));
console.log(addThis(3));
