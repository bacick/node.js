const colors = require('colors');
const args = process.argv.slice(2);
const a = args[0];
const b = args[1];

function isPrime(num) {  
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }    
    }
    return num > 1;
  }
  
 
  function getPrimesFor(i, num) {
    const primes = [];
    for (i; i <= num; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return printPrimes(primes);
  }
  
  
  function checkNum(a, b){
    if(isNaN(a) || isNaN(b)) {
        console.log(colors.red('ERROR'));
    } else if (a > b) {
        [a, b] = [b, a];
        getPrimesFor(a, b);
      }else{
       getPrimesFor(a, b);
      }
  }
  
  function printPrimes(array) {
    if(!array.length) {console.log(colors.red('No primes number'))}
    else{
      const arrFirstNum = [];
      const arrSecondNum = [];
      const arrThirdtNum = [];
  
      for(let i = 0; i <= array.length; i+=3 ){
        arrFirstNum.push(array[i]);
      }
      let stringFirstNum = arrFirstNum.join(' ')
      
      for(let i = 1; i <= array.length; i+=3 ){
        arrSecondNum.push(array[i]);
      }
      let stringSecondNum = arrSecondNum.join(' ')
  
      for(let i = 2; i <= array.length; i+=3 ){
        arrThirdtNum.push(array[i]);
      }
      let stringThirdtNum = arrThirdtNum.join(' ')
  
      console.log(colors.red(stringFirstNum));
      console.log(colors.yellow(stringSecondNum));
      console.log(colors.green(stringThirdtNum));
    }
  };
  
checkNum(a, b);