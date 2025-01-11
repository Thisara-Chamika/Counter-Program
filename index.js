const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLable = document.getElementById("countLable");

let count = 0;

increasebtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countLable.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}