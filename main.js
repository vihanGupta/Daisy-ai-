

var speechRecognition = window.webkitSpeechRecognition;
var answer="";
var Recognition = new speechRecognition();
var synth = speechSynthesis;
var system = "";
var answer = "";
var command = "";
var Do = "";
var Name = "";
function ok()
{
 command = document.getElementById("command").value;
 Do = document.getElementById("do").value;
 localStorage.setItem("command",command);
   localStorage.setItem("Do",Do);
}

function speak()
{
  setInterval(() => {
    Recognition.start();
    answer = "";
  }, 4000);
}

Recognition.onresult = function(event)
{
    answer = event.results[0][0].transcript;
    console.log(answer);


    if(answer == "Daisy turn on the system")
    {
     document.getElementById("result").innerHTML = "Ok sir,Turning on system "; 
     Name = localStorage.getItem("Name");
     speach = "Hello "+Name;
     utterthis = new  SpeechSynthesisUtterance(speach);
     synth.speak(utterthis);
     system = "on";
    }

    if(system == "on")
    {

    if(answer == "Daisy what is the time")
   {
       Time = new Date();
       utterthis = new  SpeechSynthesisUtterance(Time);
     document.getElementById("result").innerHTML = Time;
     synth.speak(utterthis);
   }


   if(system == "on")
   {
       if(answer == "Daisy turn off the system")
       {
        document.getElementById("result").innerHTML = "Ok sir,Turning off system";
        ok = "Ok sir,Turning off system";
     utterthis = new  SpeechSynthesisUtterance(ok);
     synth.speak(utterthis);
     system = "";
       }
   }

   if(answer == "hello Daisy")
   {
    document.getElementById("result").innerHTML = "Hello , What is you'r name";
    g = "Hello , What is you'r name";
    utterthis = new  SpeechSynthesisUtterance(g);
    synth.speak(utterthis);
    setTimeout(function() {
      vo = answer;
     localStorage.setItem("name",vo);
      console.log("got the name");    
    }, 8000);
   }

   if(answer ==  "Daisy open youtube.com")
   {
    document.getElementById("result").innerHTML = "opening youtube sir";
    window.open("https://www.youtube.com",'_blank')
    an = "opening youtube sir";
    utterthis = new  SpeechSynthesisUtterance(an);
    synth.speak(utterthis);
   }


   if(answer ==  "Daisy open whatsapp.com")
   {
    document.getElementById("result").innerHTML = "opening whatsapp sir";
    window.open("https://www.whatsapp.com",'_blank')
    a = "opening whatsapp sir";
    utterthis = new  SpeechSynthesisUtterance(a);
    synth.speak(utterthis);
   }


   
   if(answer == localStorage.getItem("command"))
   {
       open(localStorage.getItem("Do"),'_blank')
       document.getElementById("result").innerHTML = "Command is "+localStorage.getItem("command");
       d = "Ok sir opening"+localStorage.getItem("Do");
       utterthis = new  SpeechSynthesisUtterance(d);
    synth.speak(utterthis);
   }


   if(answer == "Daisy what is my location")
   {
       navigator.geolocation.getCurrentPosition(function(loc)
       {
           console.log(loc);
           c = "longitude = "+loc.coords.longitude+", latitude"+loc.coords.latitude;
           utterthis = new  SpeechSynthesisUtterance(c);
    synth.speak(utterthis);
    document.getElementById("result").innerHTML = c;
       })
   }


   if(answer == "Daisy open the regular")
   {
    window.open("https://web.whatsapp.com/",'_blank');
    e = "Enjoy,Sir"
    utterthis = new SpeechSynthesisUtterance(e);
    synth.speak(utterthis)
    setTimeout(function()
       {
        window.open("https://www.youtube.com/",);
       },4000);
       off()
   }

}}
function off()
{
    system = "";
}