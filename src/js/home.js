/*var hobby1 = document.getElementById("hiking");
var hobby2 = document.getElementById("cooking");
var hobby3 = document.getElementById("gaming");
var hobby4 = document.getElementById("engineering");
var hobby5 = document.getElementById("programming");

function hideHobby1 () {
    hobby1.style.display = 'none';
}

hobby1.addEventListener('click', hideHobby1, false);*/

// spacer

var hobbies = document.getElementsByClassName("icons");

hobbies[0].onclick = function () {
    console.log("hobby 1 clicked");
};

hobbies[1].onclick = function () {
    console.log("hobby 2 clicked");
};

hobbies[2].onclick = function () {
    console.log("hobby 3 clicked");
};

hobbies[3].onclick = function () {
    console.log("hobby 4 clicked");
};

hobbies[4].onclick = function () {
    console.log("hobby 5 clicked");
};


