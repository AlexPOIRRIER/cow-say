const myInformation = require('./information.js');
const cowsay = require('cowsay');
console.log(cowsay.say({
	text : `My name is ${myInformation.name}, I'm from ${myInformation.campus}`,
	e : "oO",
    T : "U "
}));