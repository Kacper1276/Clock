var data = "Dzisiaj jest:";
var newDate = new Date();
data+= newDate.getDate() +"/";
data+= newDate.getMonth()+1 +"/";
data+= newDate.getFullYear();
document.write(data);


function zegar(){
    
    now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    
    document.getElementById('czas').innerHTML = hours + ":" + min + ":" + sec;
        
    setTimeout("zegar()", 1000);
}
 