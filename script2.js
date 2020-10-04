const input=document.querySelector('.cityname');
const temptag=document.querySelector('.temp');
const weathertag=document.querySelector('.weather');
const placetag=document.querySelector('.place');
const cftag=document.querySelector('.cf');
const fctag=document.querySelector('.fc');
var notfoundtag=document.querySelector('.notfound');
var imgtag=document.querySelector('.img');
const w=new Weather();
const spinner = document.querySelector(".spinner-border");

var data;
document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault();
    placetag.style.fontSize ="200%"
        temptag.innerHTML="";
        weathertag.textContent="";
        placetag.textContent="";
        temptag.innerHTML="";
        cftag.style.display='none';
        fctag.style.display='none';
        imgtag.style.display="none";
        imgtag.src.alt="Check whether you have correctly spelled  it";
        var city=input.value;
        console.log(city);
        input.value='';
        w.updateCity(city).then(
        res =>{console.log(res);
        data=res;
        notfoundtag.style.display='none';
        getdata();
        })
})
document.addEventListener('keypress',function(event){
    spinner.classList.remove("d-none");
    event.preventDefault();
    if((event.keyCode===13||event.which===13))
        {
        placetag.style.fontSize ="200%"
        temptag.innerHTML="";
        weathertag.textContent="";
        placetag.textContent="";
        temptag.innerHTML="";
        cftag.style.display='none';
        fctag.style.display='none';
        imgtag.style.display="none";
        imgtag.src.alt="Check whether you have correctly spelled  it";
        var city=input.value;
        console.log(city);
        input.value='';
        w.updateCity(city).then(
        res =>{console.log(res);
        data=res;
        notfoundtag.style.display='none';
        getdata();
    });
 }
});
const getdata=()=>
{
    const {citydata,weatherdata}=data;
    cftag.style.display='inline-block';
    image(weatherdata[0].WeatherText);
    temptag.innerHTML=`
   <span>${weatherdata[0].Temperature.Metric.Value}<span>
    <span>&deg;C</span>
    `;
    weathertag.textContent=`${weatherdata[0].WeatherText}`;
    placetag.textContent=`${citydata.EnglishName}, ${citydata.AdministrativeArea.EnglishName},${citydata.Country.EnglishName}`;
    console.log(data);
    console.log(citydata.Country.EnglishName);
    console.log(citydata[2]);
    console.log(weatherdata[0].Temperature.Metric.Value);
    console.log(weatherdata[0].Temperature.WeatherText);
    spinner.classList.add("d-none");

    cftag.addEventListener('click',function(){
        temptag.innerHTML=`
       <span>${weatherdata[0].Temperature.Imperial.Value}<span>
        <span>&deg;F</span>
        `;
        cftag.style.display='none';
        fctag.style.display='inline-block';
    });
    fctag.addEventListener('click',function(){
        temptag.innerHTML=`
       <span>${weatherdata[0].Temperature.Metric.Value}<span>
        <span>&deg;C</span>
        `;
        fctag.style.display='none';
        cftag.style.display='inline-block';
    });
}
const image=(weather)=>
{
    imgtag.width="100";
    imgtag.height="100";
    imgtag.style.display="block";
    if(weather.includes('Cloud')&&weather.includes('Sun'))
    {
        imgtag.src ='images/partlysunny.jpg';
    }
    else if(weather.includes('Sunny')){
        imgtag.src='images/sunny.jpg';
    }
    else if(weather.includes('Rain'))
    {
        imgtag.src='images/rainy.jpg';
    }
    else if(weather.includes('Fog')||weather.includes('Cloudy'))
    {
        imgtag.src='images/foggy.jpg';
    }
    else if(weather.includes('Thunder'))
    {
        imgtag.src='images/thunder.png';
    }
    else{
        imgtag.src ='images/partlysunny.jpg';
    }
}
const init=function()
{
    fctag.style.display='none';
    cftag.style.display='none';
}
init();