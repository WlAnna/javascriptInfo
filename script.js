
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