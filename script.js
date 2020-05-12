var notfoundtag=document.querySelector('.notfound');
class Weather{
    constructor(){}
async  getcity(city)
{
    console.log(city);
    const link='http://dataservice.accuweather.com/locations/v1/cities/search';
    const key='Ot5sL8vPFxkxv7Zm9fhLW58j7G0K9Rwi';
    const query=`?apikey=${key}&q=${city}`;
    const response =await fetch(link+query);
    const data =await response.json()
    return data[0];
}
async  getWeather(citycode)
{
    console.log(citycode);
    const link2='http://dataservice.accuweather.com/currentconditions/v1/';
    const key2='Ot5sL8vPFxkxv7Zm9fhLW58j7G0K9Rwi';
    const query=`${citycode}?apikey=${key2}`;
    const response=await fetch(link2+query);
    const data=await response.json();
   return data;
}
async updateCity(city1){
    const citydata=await this.getcity(city1);
    const weatherdata=await this.getWeather(citydata.Key);
    console.log(weatherdata);
    console.log(citydata);
    return {citydata,weatherdata};
}
}
