"use strict";

var list = [];

var rec = function rec(a, b) {
  if (a === b) {
    list.push(b);
    return list;
  } else if (a < b) {
    list.push(a);
    rec(a + 1, b);
  }
};

rec(1, 10);
console.log(list);
var sec = document.getElementById('sec');

function timer() {
  var today = new Date();
  var hrs = today.getHours();
  var mins = today.getMinutes();
  var secs = today.getSeconds();
  document.getElementById('txt').innerHTML = hrs + ":" + mins;
  sec.innerHTML = ":" + secs;
}

setInterval(timer, 100);
var btn = document.getElementById('btn-tg');

btn.onclick = function click() {
  sec.classList.toggle("sec");
};