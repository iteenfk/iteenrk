"use strict"

function A() {
    const li = document.createElement("li");
    li.textContent = document.getElementById("in").value;

    const ul= document.getElementById("out");
    ul.appendChild(li);

    document.getElementById("in").value = "";
}

function P() {
    window.print();
}

function C() {
    const ul = document.getElementById("out");
    while (ul.firstChild != null) {
        ul.removeChild(ul.firstChild);
    }
}