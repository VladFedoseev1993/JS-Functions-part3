
 let list = [];
 let rec = function(a, b) {
   if (a === b) {
    list.push(b) 
    return list;
   } else if (a < b) {
     list.push(a)
     rec(a + 1, b)
   }
 };

rec(1,10);
console.log(list);


let sec = document.getElementById('sec');
function timer() {
    const today = new Date();
    const hrs = today.getHours();
    const mins = today.getMinutes();
    const secs = today.getSeconds();

    document.getElementById('txt').innerHTML = hrs + ":" + mins;
    sec.innerHTML = ":" + secs;
  }
  setInterval(timer, 100);
  let btn = document.getElementById('btn-tg');
  btn.onclick = function click() {
    sec.classList.toggle("sec");
  }