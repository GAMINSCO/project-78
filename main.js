//Variable
var images = [document.getElementById("pic1"), document.getElementById("pic2"), document.getElementById("pic3"), document.getElementById("pic4")];
var img =  
//Function to change pic
function update()
{
    console.log("itworks");
    //starts here
   if (document.getElementById("main-img").src === document.getElementById("pic1").src) {
    do nothing

   } else {
    document.getElementById("main-img").src = document.getElementById("pic1").src;
   }
    }