const clear=document.querySelector(".clear");
const dateElement=document.getElementById("date");
const list=document.getElementById("list");
const input=document.getElementById("input");
const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINET=lineThrough;
let options={weekday:"long",month:"short",day:"numeric"};
const today=new Date();
dateElement.innerHTML=today.toLocaleDateString("en-US",option); 