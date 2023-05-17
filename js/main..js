"use strict"

function S() {
   let li = document.createElement("li");
   let inp = document.getElementById("inp").value;
   li.textContent = inp;

   let out = document.getElementById("out");
   out.appendChild(li);

   document.getElementById("inp").value = "";

}

function C(){
    const ul = document.getElementById("out");
    while (ul.firstChild != null) {
        ul.removeChild(ul.firstChild);
    }
}

function P(){
    window.print()
}