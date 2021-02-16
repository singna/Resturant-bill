var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("Input your total bill: "));

var num2=1.07

var sum=(num1*num2)*1.05;

containerEle.innerHTML="Your total bill is $" + sum;