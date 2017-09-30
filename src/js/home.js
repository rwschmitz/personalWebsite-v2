var hobbies = document.getElementsByClassName("hobbies");
var active = false;

for (let i = 1; i < 5; i++) {
    hobbies[i].onclick = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
}
