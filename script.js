
// Task
// let name = prompt('Waht is an official name of ES?', '')

// if(name == 'ECMAScript') {
// 	console.log('Right')
// } else {
// 	console.log('You do not know')
// }


// Task 
// let username = prompt('What is you username', '')

// if(username == 'Admin') {
// 	let passowrd = prompt('Waht is your password?', '')

// 	if(passowrd == ' ' || passowrd == null ) {
// 		alert('Canceled')

// 	} else if (passowrd == 'TheMaster') {
// 		alert ('Welcome')

// 	} else {
// 		alert('Wrong password')
// 	}

// } else if(username == ' ' || username == null ) {
// 	alert('Canceled')

// } else {
// 	alert('I do not know you')
// }


//Output even numbers in the loop

// for(let i=2; i<11; i++) {

// 	if (i % 2 !== 0) continue;
// 	alert(i);
// }


// Task
// let num = prompt('Write a number grater than 100', '');

// while(num <= 100) {
// 	num = prompt('Write another number')
// }

//Task

// let n = 10;

// for(let i=0; i<10; i++) {

// 	if (n > 1 && n % 1 != 0 || n % n != 0) continue;
// 	alert(i);
// }

//Task
// function min(x, y) {
// 	return x < y ? x : y;
// }

// console.log(min(3,-1))

// //Task
// function pow(x, y) {
// 	return x**y
// }

// console.log(pow(3, 2))

// show Primes

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }

// Objects

// let user = {};
// user[name] = 'John';
// user.surname = 'Smith';
// console.log(user);
// user[name] = 'Pete'
// console.log(user);
// delete user[name]
// console.log(user);

//
// let schedule = {}

// function isEmpty(schedule) {

// 	for (let key in schedule) {
// 			return false
// 		} 
// 			return true	
// }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

//
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
	sum += salaries[key]

}

console.log(sum)

//
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {

	for (let key in menu) {

		console.log( typeof menu[key] )
		if( typeof menu[key] == 'number') {
			menu[key] *= 2
		}
	
	}
}

multiplyNumeric(menu);
console.log(menu)

//
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); 

//
// let calculator = {
// 	a: '',
// 	b: '',
//   read() {
//   	this.a = +prompt('Podaj pierwsza liczbe','');
//   	this.b = +prompt('Podaj druga liczbe','')
//   },
//   sum() {
//   	return this.a + this.b;
//   },
//   mul() {
//   	return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(calculator);
// alert( calculator.sum() );
// alert( calculator.mul() );

//
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() { // shows the current step
    // alert( this.step );
    return this.step;
  }
};

ladder.up();
ladder.up();
ladder.down();
console.log(ladder.showStep()); // 1
ladder.down();
console.log(ladder.showStep()); // 0

//
// let obj = {
//   a : 'xx'
// }


// function A() { 
//   return obj;
// }


// function B() {  
//  return obj;
// }



// let a = new A();
// let b = new B();
// console.log(a);
// console.log(b);

// alert( a == b ); // true

//

// function Calculator() {
//   this.a = '';
//   this.b = '';
//   this.read = function() {
//     this.a = +prompt('Write first number', '');
//     this.b = +prompt('Write second number', '');
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b

//   }
// }


// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


//
function Accumulator(startingValue) {
  this.value =  startingValue;
  this.read = function() {
      this.value += +prompt('Write value', '');
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

//alert(accumulator.value); // shows the sum of these values


obj = {
  name: 'Ann',
  surname: 'Kot'
};

console.log(obj.toString());
console.log(obj.valueOf());

function random (min, max) {
 return Math.floor(min + Math.random() * (max - min));

}

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

//

function ucFirst(str) {
    return str[0].toUpperCase() + str.substr(1);
}

console.log(ucFirst("john"))

console.log(ucFirst("john") == "John");

//
function checkSpam(str) {
  let strLower = str.toLowerCase();
  return strLower.includes('viagra') || strLower.includes('xxx')

}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)

//
function truncate(str, maxlength) {
  let strLen = str.length
  if(strLen > maxlength) {
    return str.slice(0, maxlength -1) + '...';
  } else {
    return str
  }

}
console.log( truncate("What I'd like to tell on this topic is:", 20) );
//truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
//console.log(truncate("Hi everyone!", 20));
//truncate("Hi everyone!", 20) = "Hi everyone!"

// 
function extractCurrencyValue(str) {
  return +str.slice(1);

}

console.log( extractCurrencyValue('$120') === 120 ); // true

//
let styles = ["Jazz","Blues"];
styles.push('Rock-n-Roll');

let stylesLen = styles.length;
console.log(Math.ceil(stylesLen / 2))
let middle = Math.ceil(stylesLen / 2);
let middleIndex = Math.ceil(stylesLen / 2) - 1;
styles[middleIndex] = 'Classics';
console.log(styles);

let firstVal = styles.shift();
console.log(styles);
console.log(firstVal);
styles.unshift("Rap","Reggae");
console.log(styles);

//



// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("A number please?", 0);

//     // should we cancel?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log( sumInput() );

//
function camelize(str) {
  let arr = str.split('-');
  arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
)
  let joined = arr.join('');
  return joined;

}

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

console.log( camelize("background-color") )



camelize("background-color") == 'backgroundColor';
console.log( camelize("list-style-image") == 'listStyleImage');
console.log( camelize("-webkit-transition") == 'WebkitTransition');


//
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b))
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

//
let arra = [5, 2, 1, -10, 8];

arra.sort((a, b) => b - a)
// ... your code to sort it in decreasing order

console.log( arra ); // 8, 5, 2, 1, -10

//
function filterRangeInPlace(arr2, a, b) {
    arr2.forEach((el, index) => {
      if (el < a || el > b) {
        arr2.splice(index, 1)
      }
    })

    return arr2;
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log( arr2 ); // [3, 1]

//

function Calculator() {
  this.obj = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
  }
  this.calculate = function(str) {
      let split = str.split(' ')
      console.log(split)
      let a = split[0]
      let b = split[2]
      let oper = split[1]

      return this.obj[oper](+a, +b)

  }

  this.addMethod = function(oper, func) {
    this.obj[oper]= func
  }

}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result ); // 8

//

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];


// let names = users.map(el => el.name)

// console.log( names ); // John, Pete, Mary

// let names2 = users.forEach(el => el.name)

// console.log( names2 ); // John, Pete, Mary

//
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(el => ({
//     fullName : el.name + ' ' + el.surname,
//   id : el.id
// }))


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//console.log(usersMapped)
// console.log(usersMapped[0].id )// 1
// console.log( usersMapped[0].fullName ) // John Smith

//
// let johnny = { name: "Johnnny", age: 25 };
// let peter = { name: "Peter", age: 30 };
// let marys = { name: "Marys", age: 28 };

// let arr3 = [ peter, johnny, marys ];

// function sortByAge(arr3) {
//   return arr3.sort((a,b) => a.age - b.age)
// }

// sortByAge(arr3);

// // now: [johnny, marys, peter]
// console.log(arr3[0].name); // Johnny
// console.log(arr3[1].name); // Marys
// console.log(arr3[2].name); // Peter

// //

// function unique(arr) {

//   let newArr = []
//   arr.forEach ( el => {
//     if(!newArr.includes(el)) {
//       newArr.push(el) 
//     }
//   })
//   arr.includes()

//   return newArr;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

//console.log( unique(strings) ); // Hare, Krishna, :-O

//


/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

//
function unique(arr) {

  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

//
let arr4 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr4) {
  let map = new Map()
  let arrOrder = arr4.map(el => {
    let val = el.toLowerCase().split('').sort().join('')
    map.set(val, el)
  })

  return Array.from(map.values());
}

console.log( aclean(arr4) ); // "nap,teachers,ear" or "PAN,cheaters,era"

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set)

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

console.log(map)

//
let map1 = new Map();

map1.set("name", "John");

let keys = Array.from(map1.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys);

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

console.log(Object.entries(prices))

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map(entry => { 
    console.log(entry)
    return [entry[0], entry[1] * 2]})
);

alert(doublePrices.meat); // 8

//
let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  let sum = 0;

  for(let value of Object.values(obj)) {
    sum += value

  }

  return sum;

}

console.log( sumSalaries(salaries2) ); // 650

//

let user = {
  name: 'John',
  age: 30
};

function count(obj) {

 return Object.keys(obj).length

}
console.log(count(user) ); // 2

//
let user5 = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin : isAdmin = 'false'} = user5

console.log(name, age, isAdmin)

//
let salaries3 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries3) {
  let maxSalary = 0
  for (let [name, salary] of Object.entries(salaries3))
    if(maxSalary < salary) {
      maxSalary = salary
    }
    return maxSalary
}

console.log(topSalary(salaries3))