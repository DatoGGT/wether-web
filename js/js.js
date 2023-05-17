"use strict"
const myfun =async ()=>{
     
     const resu=await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,showers_sum,snowfall_sum,windspeed_10m_max&current_weather=true&timezone=auto")
     const data=await resu.json()
     const latii=document.querySelectorAll('li')
     const h1 = document.getElementById('h1d')
     const p = document.getElementById('p1')
     let minspeed=Infinity
     data.daily.windspeed_10m_max.forEach(element => { 
          if(element <minspeed){
               minspeed=element
          }
     
          
     });
     
     




latii[0].addEventListener("click",()=>{
     h1.innerHTML="Latitude"
     p.innerHTML=data.latitude
})
latii[1].addEventListener("click",()=>{
          h1.innerHTML="Longitude"
          p.innerHTML=data.longitude
     })
     latii[2].addEventListener("click",()=>{
          h1.innerHTML="Timezone"
          p.innerHTML=data.timezone
     })
     latii[3].addEventListener("click",()=>{
          h1.innerHTML="Temperature"
          p.innerHTML=data.current_weather.temperature+data.daily_units.temperature_2m_max
     })
     latii[4].addEventListener("click",()=>{
          h1.innerHTML="WindSpeed"
          p.innerHTML=data.current_weather.windspeed+data.daily_units.windspeed_10m_max
     })
     latii[5].addEventListener("click",()=>{
          h1.innerHTML="Time"
          p.innerHTML=data.current_weather.time
     })
     latii[6].addEventListener("click",()=>{
          h1.innerHTML=" Max Temperature"
          p.innerHTML=data.daily.temperature_2m_max[1]+data.daily_units.temperature_2m_max
     })
     latii[7].addEventListener("click",()=>{
          h1.innerHTML=" Min Temperature"
          p.innerHTML=data.daily.temperature_2m_min[1]+data.daily_units.temperature_2m_max
     })
     latii[8].addEventListener("click",()=>{
          h1.innerHTML="SunRise"
          p.innerHTML=data.daily.sunrise[0]
     })
     latii[9].addEventListener("click",()=>{
          h1.innerHTML="SunSet"
          p.innerHTML=data.daily.sunset[1]
     })
     latii[10].addEventListener("click",()=>{
          h1.innerHTML="Rain"
          p.textContent=data.daily.showers_sum[1]+data.daily_units.showers_sum
     })
     latii[11].addEventListener("click",()=>{
          h1.innerHTML="Snow"
          p.innerHTML=data.daily.snowfall_sum[1]+data.daily_units.snowfall_sum
     })
     latii[12].addEventListener("click",()=>{
          h1.innerHTML="Max WindSpeed"
          p.innerHTML=data.daily.windspeed_10m_max[1]+data.daily_units.windspeed_10m_max
     })
     latii[13].addEventListener("click",()=>{
          h1.innerHTML=" Min WindSpeed"
          p.innerHTML=minspeed+data.daily_units.windspeed_10m_max
     })
     latii[14].addEventListener("click",()=>{
          h1.innerHTML="Hourly Time"
          p.innerHTML=data.hourly.time[1]
     })
     latii[15].addEventListener("click",()=>{
          
          h1.innerHTML="Hourly Temperature"
          p.innerHTML=data.hourly.temperature_2m[1]
     })
     if(data.current_weather.is_day===1){
          document.body.style.backgroundImage="url(./js/img/da.gif)";
          document.body.style.backgroundSize="cover";
          document.body.style.backgroundPosition="left bottom ";
          document.body.style.backgroundRepeat= "no-repeat";
     }
     else{
          document.body.style.backgroundImage="url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
       document.body.style.backgroundRepeat="no-repeat"  
       document.body.style.backgroundSize="cover";
     }
}
myfun()









// წამოიღეთ დატა მოცემული ლინკიდან და გამოიტანეთ საიტზე:latitude,longitude,timezone
// current_weather(შესაბამისი საზომი ერთეულებით daily_units -დან ): temperature,windspeed,is_day,time
// დღის მაქსიმალური და მინიმალური ტემპერატურა (temperature_2m_max,temperature_2m_min) 
// მზის ამოსვლის/ჩასვლის დასაწყისი და დასასრული (sunrise/sunset)
// წვიმის/თოვლის შანსის უმაღლესი კოეფიციენტი (showers_sum/snowfall_sum)
// ქარის მინიმალური/მაქსიმალური სიჩქარე



