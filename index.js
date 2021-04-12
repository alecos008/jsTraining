let word = 'miami';
let arr = ['bcn', 'mia', 'sao', 'mex', 'par', 'miami', 'ams', 'ber', 'paris', 'lis', 'mad'];

for(var i = 0; i < arr.length; i++) {
  if (word === arr[i] ) {
    console.log(word);
    break;
  } else {
    console.log("Not Match Found");
  }
}

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for(var i = 0; i < prices.length; i++) {
  sum += prices[i]
} console.log(sum); 

let rounded = Math.round(sum * 10) / 10;
console.log(rounded);

let student = {
    name: 'Max',
    age: 27
  };
  for (let key in student) {
     console.log(student[key]);
    break;
  }