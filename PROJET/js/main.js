var darkmode = document.getElementById("DarkModeButton");
var body = document.getElementById("body");
var bodyclass = document.getElementsByClassName("bodyclass")
var divs = document.getElementsByClassName("darkmodediv")



darkmode.addEventListener('click', function () {
    body.classList.toggle("darkmode");
    divs.forEach(function (element) {
        element.classList.toggle("darkmode");
    });
    
});




//headerdark.toggle("darkheader")