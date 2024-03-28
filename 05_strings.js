const name = "Kalpana"
const repoCount = 20

// console.log(name+repoCount+ " value");   =>Outdated method.

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('nfs-2-board')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  ==>{}

// console.log(gameName.length); ==>4
// console.log(gameName.toUpperCase());  ==>NFS2
// console.log(gameName.charAt(2)); ==>s
// console.log(gameName.indexOf('s')); ==>2

const newString = gameName.substring(0,3)  //can't use -ve index
console.log(newString);

const anotherString = gameName.slice(-4,3) //can use -ve index
console.log(anotherString);

const newString1 = "   kalpana    "
console.log(newString1);
console.log(newString1.trim());  //trim() removes spaces in the string given. and it works only on whitespace character+line terminators
const url = "https://kalpna.com/kalpana%20n"

console.log(url.replace('%20', '-'));

console.log(url.includes('kalpna'))
console.log(url.includes('kalpna2'))
console.log(gameName.split("-"))
