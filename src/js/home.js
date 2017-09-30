var hobbies = document.getElementsByClassName("hobbies");
var active = false;

/*
for (let i = 0; i < 5; i++) {
    hobbies[i].onclick = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
}
*/

hobbies[0].onclick = function() {
    if(!active) {
        for(i = 1; i < 5; i++) {
            hobbies[i].style.display = 'none';
            active = true;
        }
    } else {
        hobbies[i].style.display = 'block';
        active = false;
    }
};
