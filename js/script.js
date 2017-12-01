var write = document.getElementById("writeUs");
var modal = document.querySelector(".modal-bg");
var close = document.getElementById("close");
var customer = modal.querySelector("[name=customer]");
var close2 = document.querySelector(".modal-bg");

write.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.add("modal-show");
    customer.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.remove("modal-show");
});

close2.addEventListener("click", function() {
    modal.classList.remove("modal-show");
});


// map
var mapBtn = document.querySelector(".map-img");
var map = document.getElementById("map");

mapBtn.addEventListener("click", function(evt) {
    evt.preventDefault();  
    map.classList.add("modal-show");
});

window.onclick = function(event) {
    if (event.target == map) {
        map.classList.remove("modal-show");
    }
};

