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

  function calculator(num1, num2, operator){
    if(!num1 || !num2 || !operator){
      console.log("Please provide both numbers and operator!");
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number"){
      console.log("Please add a numeric value only!");
      return;
    }
  
    if(operator !== "+" && operator != "-" && operator != "*" && operator != "/"){
      console.log("Please provide valid operator.");
      return;
    }
  
    let result;
    switch(operator){
      case("+"):
        result = num1 + num2;
        break;
      case("-"):
        result = num1 - num2;
        break;
      case("*"):
        result = num1 * num2;
        break;
      case("/"):
        result = num1 / num2;
        break;
    }
    
    let response = `${num1} ${operator} ${num2} = ${result}`;
    console.log(response);
    return response;
  }
  
  calculator(6, 20077, "*");

  function welcome(name) { 
    console.log(`Hello ${name}!`);
   }
   welcome("alejandro");

   function printToTwenty () {
    for (let i = 0; i <= 20; i++) {
      console.log(i);
    }
  }
  printToTwenty ();

  function printNumbers (number) {
    for (let i = 0; i <= number; i++) {
      console.log(i);
    }
  }
  printNumbers (28559);

  let ironCities = [
    'Amsterdam',
    'Barcelona',
    'Berlin',
    'Lisbon',
    'Madrid',
    'Mexico City',
    'Miami',         //created array
    'Paris',
    'Sao Paulo'
  ];
  function printArrayElements (someArr) {
    someArr.forEach (city => {               // iterate through all array
      console.log(city);
    });
  }
  function printEvens(someArr) {
    for (i=0; i<someArr.length; i+=2) {
      console.log(someArr[i]);
    }
  }
  printEvens(ironCities);

  const prices = [5, 7.99, 9.99, 0.99, 21];

  function sumAll (arr) {
    let total = 0;
    for (let i = 0; i <= arr.lenght; i++) {
     total = total += arr[i];
    }
    console.log(total);
  }
  sumAll(prices);

let arr = [1,"alejandro", 5, true];

function printType (someArr) {
  for (i=0; i<someArr.length; i++) {
    console.log(typeof(someArr[i]));
  }
}
printType(arr);

let user = {
  username: 'ironhacker',
  password: '123iron345'
};

function getCredentials (obj) {
  console.log(`Username is: ${obj.username} and the password is ${obj.password}`);
}

getCredentials (user);

let property = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US'
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard']
};

function checkProperty (obj) {
  if (obj.isForSale === true) {
    console.log(`The owner, ${obj.owner.firstName} put the home for sale! The property has ${obj.amenities.length} amenities.`);
  } else {
    console.log(`The home in ${obj.address.street} no.${obj.address.number} is not for sale`);
  }
}

checkProperty(property);

// For Rover Mars Project
// 1- Create a 10x10 grid
// 2- Create Function to turn the rover
// 3- Create a fuction to move forward
// 4- Create a function to receive commands

// Rover object goes here:
let rover = {
  direction: 'N',
  position: {x: 0, y: 0},
  travelLog: []
}
// ======================
function turnLeft(rover) {
  if (rover.direction == "N") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "N";
  }
   console.log(`The rover is facing ${rover.direction} and is in x: ${rover.position.x}, y: ${rover.position.y}`);
}
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);  //turLeft(rover) works!
turnLeft(rover);

function turnRight(rover) {
  if (rover.direction == "N") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "N";
  }
  console.log(`The rover is facing ${rover.direction} and is in x: ${rover.position.x}, y: ${rover.position.y}`);
}
turnRight(rover);
turnRight(rover); //turnRight(rover) works!
turnRight(rover);
turnRight(rover);

function moveForward(rover) {
  if (rover.direction == "N") {
    rover.position.y--; 
  } else if (rover.direction == "W") {
    rover.position.x--;
  } else if (rover.direction == "S") {
    rover.position.y++;
  } else if (rover.direction == "E") {
    rover.position.x++;
  }
  console.log(`The rover is facing ${rover.direction} and is in x: ${rover.position.x}, y: ${rover.position.y}`);
}

turnRight (rover);
turnRight (rover);
moveForward(rover);  // moveForward (rover) works!
moveForward(rover);
moveForward(rover);

function updateTravelLog (rover) {
  rover.travelLog.push(`x: ${rover.position.x}, y: ${rover.position.y} `);
  console.log(`Travel log: ${rover.travelLog}`);
}

function command (rover, command) {
  const commandArr = command.split("");
  commandArr.forEach (command => {
    switch (command) {
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'f':
      moveForward(rover)
      break;
  }
    updateTravelLog(rover);
  });
   
}

command (rover, 'rrflf');  //updates travelLog & accepts multiple commands