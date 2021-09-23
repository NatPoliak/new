"use strict"
const date = new Date();
const hours = date.getHours();
console.log(hours);
const userName = prompt("What is your name?", "Alex");

if (5 <= hours <= 12) {
    alert (`Good morning, ${userName}`);
} else if (13 <= hours <=18) {
    alert (`Good day, ${userName}`);
} else if (19 <= hours <=23) {
    alert (`Good evening, ${userName}`);
}

