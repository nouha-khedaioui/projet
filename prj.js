function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes()+ ":"+ date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(updateDate,500);
onload = updateDate();
function getcolor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("color",getColor);
    document.getElementById("bod").style.backgroundColor = localStorage.getItem("color");
}
function setcolor(){
    document.getElementById("setcolor").value =  localStorage.getItem("color");
    localStorage.setItem("color",getColor);
    document.getElementById("bod").style.backgroundColor = localStorage.getItem("color");
}
setInterval(setcolor,100);