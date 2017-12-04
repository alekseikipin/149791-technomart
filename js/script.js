var write = document.getElementById("writeUs");
var modal = document.querySelector(".modal-off");
var customer = modal.querySelector("[name=customer]");
var email = modal.querySelector("[name=e-mail]");
var close = document.getElementById("close");
var close2 = document.querySelector(".modal-bg");
var form = modal.querySelector("form");
var feedback = modal.querySelector("[name=note]");
var error = modal.querySelector(".modal");

if (write) {
write.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.add("modal-on");
    customer.focus();
    if (storage) {
        var storage = localStorage.getItem("userName");
        email.focus();
        customer.value = storage;
    }
    if (storage) {
        var storage2 = localStorage.getItem("email");
        feedback.focus();
        email.value = storage2;
    }
});
}

if (close) {close.addEventListener("click", function(evt) {
    evt.preventDefault();  
    modal.classList.remove("modal-on");
});

close2.addEventListener("click", function() {
    modal.classList.remove("modal-on");
});
}

if (form) {form.addEventListener("submit", function(evt) {
    var storage = localStorage.getItem("userName");
    var storage2 = localStorage.getItem("email");
    if (!customer.value || !email.value || !feedback.value) {
    evt.preventDefault();  
    error.classList.add("modal-error");
    } else {
        localStorage.setItem("userName", customer.value);
        localStorage.setItem("email", email.value);
    }
});
}

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

if (mapBtn) {mapBtn.addEventListener("click", function(evt) {
    evt.preventDefault();  
    map.classList.add("modal-on");
});
}

if (map) {
    var closeMap = map.querySelector(".modal-bg");
    closeMap.addEventListener("click", function() {
    map.classList.remove("modal-on");
});
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (map.classList.contains("modal-on")) {
        map.classList.remove("modal-on");
    }
}
});


//cart 
var cartBtn = document.querySelectorAll(".popular-items-button-buy");
var buy = document.getElementById("cart-added");
var closeBuy = document.getElementById("close3");

for (var i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener("click", function(evt) {
        evt.preventDefault();  
        buy.classList.add("modal-on");
    });
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (buy.classList.contains("modal-on")) {
        buy.classList.remove("modal-on");
    }
}
});

closeBuy.addEventListener("click", function(evt) {
    evt.preventDefault();  
    buy.classList.remove("modal-on");
});

if (buy) {
    var closeBuy2 = buy.querySelector(".modal-bg");
    closeBuy2.addEventListener("click", function() {
    buy.classList.remove("modal-on");
});
}