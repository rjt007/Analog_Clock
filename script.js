
function interval()
{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let hrot = 30*h+m/2;
    let mrot = 6*m;
    let srot = 6*s;
    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}
setInterval(interval,1000);

//Just another way of writing setInterval
/*
setInterval(() => {
    time = new Date();
    h= time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    hrot= 30*h + m/2;
    mrot = 6*m;
    srot = 6*s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);*/