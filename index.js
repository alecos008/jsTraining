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

  let product = {
    name: 'headphones',
    price: 100
  };
  for(let key in product) {
  } if (product.price > 100) {
    product.discount = "10%";
  } else {
    product.discount = "7%";
  } for (let key in product) {
    product.price = product.price * 0.9;
  } console.log(product);

  let products = [
    {
      name: 'iPhone',
      price: 799.99
    },
    {
      name: 'Samsung Galaxy S10',
      price: 900.0
    }
  ];
  console.log(products[0].name);
  console.log(products[1].name);
  
  
  let course = {
    name: 'Web Development',
    type: ['full-time', 'part-time'],
    topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
  };
  console.log(course.type[1]);
  console.log(course.topics[0]);
  console.log(course.topics[4]);
  
  let student = {
    firstName: 'Ana',
    lastName: 'Blair',
    course: {
      name: 'Web Development',
      type: 'part-time'
    },
    attendedIn: 'Madrid',
    address: {
      street: 'Happy Street',
      number: 123,
      city: 'Barcelona',
      zip: 08015,
      country: 'Spain'
    }
  };
  
  console.log(student.course.name);
  console.log(student.address.street);
  console.log(`Ana moved from ${student.address.city} to ${student.attendIn} to take the ${student.type} ${student.course.name} course`);
  
  const ironCampuses = [
    ["Mexico City", "Miami", "Sao Paulo"],
    ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
  ];
  
  console.log(ironCampuses[0][1]); // => Miami
  console.log(ironCampuses[1][0]); // => Amsterdam
  console.log(ironCampuses[1][5]); // => Paris

  let basic = {
    language: 'JavaScript',
    frameworks: [
      {
        end: 'back',
        list: [
          {
            name: 'ExpressJS',
            released: 2010
          },
          {
            name: 'MeteorJS',
            released: 2012
          }
        ]
      },
      {
        end: 'front',
        list: [
          {
            name: 'ReactJS',
            released: 2013
          },
          {
            name: 'VueJS',
            released: 2014
          }
        ]
      }
    ]
  };
  console.log(basic.frameworks[0].list[0].name); // => ExpressJS
  console.log(`In Ironhack, I'll learn ${basic.frameworks[0].list[0].name} and ${basic.frameworks[1].list[0].name}.`);  // => In Ironhack, I'll learn ExpressJS and ReactJS.

  function calculateSum(num1, num2){ 
    return num1 + num2;      
  }
                    
  function printResult(){
      const result = calculateSum(3,6);
      console.log(`The result is ${result}.`);
  }
  
  printResult();
  
  
  function multiplyNumbers (a, b) {
    return a * b;
  }
  function printMultiplied () {
    const multiplied = multiplyNumbers(3,6);
    console.log(`The result is ${multiplied}.`);
  }
  printMultiplied();
  // first multiplying function 