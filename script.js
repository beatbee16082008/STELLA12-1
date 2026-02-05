let playing=false;

function toggleMusic(){
let frame=document.getElementById("musicFrame");

if(!playing){
frame.src+="&autoplay=1";
playing=true;
}else{
frame.src=frame.src.replace("&autoplay=1","");
playing=false;
}
}

function openPopup(){
document.getElementById("popup").classList.add("show");
}

function closePopup(){
document.getElementById("popup").classList.remove("show");
}

window.onload=function(){
setTimeout(openPopup,1200);
}

document.addEventListener("click",function(e){
let popup=document.getElementById("popup");
let content=document.querySelector(".popup-content");

if(popup.classList.contains("show") && !content.contains(e.target)){
closePopup();
}
});