var hobby1 = document.getElementById("#hiking");
var hobby2 = document.getElementById("#cooking");
var hobby3 = document.getElementById("#gaming");
var hobby4 = document.getElementById("#engineering");
var hobby5 = document.getElementById("#programming");

function hideHobby1 () {
    hobby1.style.display = 'none';
}

hobby1.addEventListener('click',hideHobby1, false);