function start(){
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
  
  }
  function stop(){
     document.getElementById("stopButton").disabled = true;
     document.getElementById("startButton").disabled = false;
  }
 
  
  function countdown2(){
      console.log("countdown started")
      var time = 50;
  for( var i= 0;i < 51; i++){
      console.log(i)
      if (i== 50)
     { 
          setTimeout (function() {
          document.getElementById("countdownStatus").innerHTML= "blastoff";
      ;
          },50000)
      } else if (i >25){   
      setTimeout(function(){
           document.getElementById("countdownStatus").innerHTML="Warning Less than ½ way to launch, time left =" +time;
          time= time-1;
  },1000*i);} else {
      setTimeout(function(){
          document.getElementById("countdownStatus").innerHTML= time;
          time= time-1;
      },1000 * i)
  
  }
  
  
  
       
  
   
  }
  }