var hobbies = document.getElementsByClassName("hobbies");
var active = false;

for (let i = 0; i < 5; i++) {
    hobbies[i].onload = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
}
