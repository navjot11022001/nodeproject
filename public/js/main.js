const submit=document.getElementById("submitbutton");
const cityName=document.getElementById("cityName");
const temp_stats=document.getElementById("temp")
const city_name=document.getElementById("city_name")
const dd=document.querySelector(".middle_layer");
const temp_status=document.getElementById("temp_status")

const getInfo=async(event)=>{
event.preventDefault();
let cityval=cityName.value;
if(cityval===""){
    alert("please write the name before your search")
    dd.classList.add('data_hide')
}

else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d1d3f9b5111f9656faee25e59bc9e7ce`;
   const res=await fetch(url);
   const data=await res.json();
   const arr=[data];
   city_name.innerText=arr[0].name;
temp_stats.innerText=arr[0].main.temp;
const tempStatus=arr[0].weather[0].main;

if(tempStatus==="Sunny"){
    temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";}
else if(tempStatus==="Clouds")
{  temp_status.innerHTML="<i class='fas fa-cloud' style='color: #eccc68;'></i>";

}

else if(tempStatus==="Rainy")
{
    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #eccc68;'></i>";

}
else{
    temp_status.innerHTML="<i class='fas fa-sun' style='color: #44c3de;'></i>";
}

dd.classList.remove('data_hide');
}
catch{

}
}

}


const getCurrentDay=()=>{
    let ar=["sunday","monday","tuesday","wednesdas","thrusday",
"friday","saturday"];
const dat=new Date();
return ar[dat.getDay()];
}
const getDate=()=>{

    var months=["jan",
"feb"
,"march",
"april",
"may",
"june",
"july",
"august",
"sept",
"oct",
"nov",
"dec"];
var dat=new Date();
const tod=dat.getDate();
return `${tod} ${months[dat.getMonth()]}`;
}

const day=document.getElementById("day");
const date=document.getElementById("today_data");
day.innerText=getCurrentDay();
date.innerText=getDate();
submit.addEventListener('click',getInfo);