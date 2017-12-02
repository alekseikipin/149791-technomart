var write = document.getElementById("writeUs");
var modal = document.querySelector(".modal-off");
var customer = modal.querySelector("[name=customer]");
var email = modal.querySelector("[name=e-mail]");
var close = document.getElementById("close");
var close2 = document.querySelector(".modal-bg");
var form = modal.querySelector("form");
var feedback = modal.querySelector("[name=note]");
var storage = localStorage.getItem("userName");
var storage2 = localStorage.getItem("email");
var error = modal.querySelector(".modal");

write.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.add("modal-on");
    customer.focus();
    if (storage) {
        email.focus();
        customer.value = storage;
    }
    if (storage) {
        feedback.focus();
        email.value = storage2;
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.remove("modal-on");
});

close2.addEventListener("click", function() {
    modal.classList.remove("modal-on");
});

form.addEventListener("submit", function(evt) {
    if (!customer.value || !email.value || !feedback.value) {
    evt.preventDefault();  
    error.classList.add("modal-error");
    } else {
        localStorage.setItem("userName", customer.value);
        localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-on")) {
        modal.classList.remove("modal-on");
    }
}
});


// map
var mapBtn = document.querySelector(".map-img");
var map = document.getElementById("map");
var closeMap = map.querySelector(".modal-bg");

mapBtn.addEventListener("click", function(evt) {
    evt.preventDefault();  
    map.classList.add("modal-on");
});

closeMap.addEventListener("click", function() {
    map.classList.remove("modal-on");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (map.classList.contains("modal-on")) {
        map.classList.remove("modal-on");
    }
}
});