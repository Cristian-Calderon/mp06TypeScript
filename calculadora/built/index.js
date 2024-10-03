"use strict";
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let clear = document.getElementById('clear');
let equalb = document.getElementById('equal');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let btnValue = button.value;
        display.value = display.value + btnValue;
    });
});
clear.addEventListener('click', () => {
    display.value = '';
});
equalb.addEventListener('click', () => {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Error';
        }
        else {
            display.value = eval(display.value).toString();
        }
    }
    catch (error) {
        display.value = 'error';
    }
});
