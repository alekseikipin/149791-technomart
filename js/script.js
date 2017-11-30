document.getElementById("writeUs").addEventListener('click', function (event) {
    event.preventDefault();
});

var modal = document.getElementById('writeUsModal');

var write = document.getElementById("writeUs");

var span = document.getElementsByClassName("close")[0];

write.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("mapLink").addEventListener('click', function (event) {
    event.preventDefault();
});

// Get the modal
var modalMap = document.getElementById('map');

// Get the button that opens the modal
var btn = document.getElementById("mapLink");

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modalMap.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}