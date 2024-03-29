// Смена изображения при нажатии
var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/арвен.png") {
        myImage.setAttribute("src", "images/арвенн.png");
    }
    else {
        myImage.setAttribute("src", "images/арвен.png");
    }
}

// Смена пользователя при нажатии на кнопку
var myButton = document.querySelector("button");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    alert("Grata, " + myName);
}
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    alert("Grata, " + storedName);
}
myButton.onclick = function() {
    setUserName();
}
