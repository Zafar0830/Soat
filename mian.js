let soat=document.getElementById('hours')
let min=document.getElementById('minutes')
let sekund=document.getElementById('seconds')
let elAppm=document.getElementById('appm')
let hh=document.getElementById('hh')
let mm=document.getElementById('mm')
let ss=document.getElementById('ss')

setInterval(()=>{
    let h=new Date().getHours()
    
    let m=new Date().getMinutes()
    
    let s=new Date().getSeconds()
    
    let am =h>=12? "PM":"AM"
    if (h>12) {
        h=h-12
    }
    h=(h<10)? "0"+h:h;
    m=(m<10)? "0"+m:m;
    s=(s<10)? "0"+s:s;
    soat.innerHTML=h
    min.innerHTML=m
    sekund.innerHTML=s
    elAppm.innerHTML=am

    hh.style.strokeDashoffset=440-(440*h)/12
    mm.style.strokeDashoffset=440-(440*m)/60
    ss.style.strokeDashoffset=440-(440*s)/60
})