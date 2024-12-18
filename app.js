let count = 10; 
document.getElementById("increaseBtn").onclick = function () { 
count += 1; 
document.getElementById("count label").innerHTML = count;
}
document.getElementById("decreaseBtn").onclick = function () {
count-=1; 
    document.getElementById("count label").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function () {
count=0; 
document.getElementById("count label").innerHTML = count;
}