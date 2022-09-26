const myInfo = require('./information');   

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : myInfo.name + ' ' + myInfo.campus,
    e : "^^",
    T : "U",
}));