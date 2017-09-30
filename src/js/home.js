var hobbies = document.getElementsByClassName("hobbies");

for (let i = 0; i < 5; i++) {
    hobbies[i].onclick = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
}
