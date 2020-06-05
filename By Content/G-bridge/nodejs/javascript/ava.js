const fs = require('fs');
let power;
let energy;

exports.init = function() {
    power = 30;
    energy = 30;
};

exports.print = function () {
    console.log(`현재 energy = ${energy}, 현재 power = ${power}`);
};

exports.eat = function () {
    if(energy>1000)
        energy++;
    if(power>0)
        power--;
    console.log('eat');
};

exports.sleep = function() {
    if(power>0 && energy>0) {
        energy--;
        power--;
    }
    console.log('sleep');
};

exports.exercise = function() {
    if(power<1000)
        power++;
    if(energy>0)
        energy--;
    console.log('exercise');
};

exports.save = function () {
    const text = `energy = ${energy}, power = ${power}\n`;
    fs.writeFile('avatar.txt', text, 'utf8', function (error) { 
        console.log('save'); 
   }); 
};

