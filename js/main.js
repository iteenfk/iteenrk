"use strict"

let words = [];
function A(){
    const in1 = document.getElementById("in1")
    const in2 = document.getElementById("in2")
    const trim1 = in1.value.trim();
    const trim2 = in2.value.trim();

    if (!trim1 || !trim2) {
        alert("単語と意味を入力してください。");
        return;
    }
    words.push({trim1, trim2});
    D();
    in1.value = "";
    in2.value = "";
} 

function D() {
  const out = document.getElementById("out");
  out.innerHTML = "";
  words.forEach((x) =>{
    const li = document.createElement("li");
    li.textContent = `${x.trim1}: ${x.trim2}`;
    out.appendChild(li);
    console.log(li);
    });
}

function C(){
    const ul = document.getElementById("out");
    while(ul.firstChild != null) {
        ul.removeChild(ul.firstChild);
    }
    let word = [];
}

function P(){
    window.print()
}