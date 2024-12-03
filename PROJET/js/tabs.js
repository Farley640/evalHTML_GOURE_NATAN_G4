var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var buttonx = document.getElementById("buttonx");

var pagediv1 = document.getElementById("page-div1");
var pagediv2 = document.getElementById("page-div2");
var pagediv3 = document.getElementById("page-div3");

button1.classList.add("buttonspageblanc");
pagediv2.classList.add("display-none"); 
pagediv3.classList.add("display-none");
 
button1.addEventListener('click', function () {
    button1.classList.add("buttonspageblanc");
    button2.classList.remove("buttonspageblanc");
    button3.classList.remove("buttonspageblanc");
    pagediv1.classList.remove("display-none"); 
    pagediv2.classList.add("display-none"); 
    pagediv3.classList.add("display-none");

});

button2.addEventListener('click', function () {
    button2.classList.add("buttonspageblanc");
    button1.classList.remove("buttonspageblanc");
    button3.classList.remove("buttonspageblanc");
    pagediv1.classList.add("display-none"); 
    pagediv2.classList.remove("display-none"); 
    pagediv3.classList.add("display-none");

});

button3.addEventListener('click', function () {
    button3.classList.add("buttonspageblanc");
    button1.classList.remove("buttonspageblanc");
    button2.classList.remove("buttonspageblanc");
    pagediv1.classList.add("display-none"); 
    pagediv2.classList.add("display-none"); 
    pagediv3.classList.remove("display-none");

});

buttonx.addEventListener('click', function () {
    button1.classList.remove("buttonspageblanc");
    button2.classList.remove("buttonspageblanc");
    button3.classList.remove("buttonspageblanc");
    pagediv1.classList.add("display-none"); 
    pagediv2.classList.add("display-none"); 
    pagediv3.classList.add("display-none");

});



