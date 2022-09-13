let div=document.createElement("div");
div.style.textAlign="center";
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country")

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML=("Search");
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let Recovered=document.createElement("div");
Recovered.setAttribute("id","active");

let Deaths=document.createElement("div");
Deaths.setAttribute("id","active");

div.append(input,button,active,Recovered,Deaths);
document.body.append(div);


async function foo(){
let  countryname=document.getElementById("country").value;
 console.log(countryname);
 let url=`https://api.covid19api.com/dayone/country/${countryname}`;
 let res=await fetch(url);
 let res1=await res.json();
 console.log(res1);
 let index=res1.length-1;
 console.log(res1[index].Active);
 console.log(res1[index].Recovered);
 console.log(res1[index].Deaths);
 active.innerHTML=`total active cases:${res1[index].Active}`;
 
 Recovered.innerHTML=`total recovered cases:${res1[index].Recovered}`;
 
 Deaths.innerHTML=`total death cases:${res1[index].Deaths}`;

};
