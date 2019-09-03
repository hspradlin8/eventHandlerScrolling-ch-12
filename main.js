
const audrey = document.getElementById("audrey");


document.addEventListener("scroll", function() { 
 var x = window.scrollY/3;
   if (x <= 50) 
   { 
      audrey.style.width = "50px";
   }else {
    audrey.style.width = x.toString() + "px";
   }

  
  var y = window.scrollY/4;
  if (y <= 100) 
  { 
        audrey.style.height = "100px";
   } else 
   {
        audrey.style.height = y.toString() + "px";
   }
});
 

 
