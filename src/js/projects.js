// Gets all button elements

var project = [];
for (var i = 1; i < 7; i++) {
   project[i] = document.getElementById("project" + i);
}

// Checks which image was clicked

function projects(e) {
    switch(e.target.id) {
        case '1':
        $('#project1Modal').modal('show');
        break;

        case '2':
        $('#project2Modal').modal('show');
        break;

        case '3':
        $('#project3Modal').modal('show');
        break;

        case '4':
        $('#project4Modal').modal('show');
        break;

        case '5':
        $('#project5Modal').modal('show');
        break;

        case '6':
        $('#project6Modal').modal('show');
        break;
    }
}

// Add event listners for all buttons

for (i = 1; i < project.length; i++) {
   project[i].addEventListener("click", projects, false);
}
