  var images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/book.png"
  ];
  var i=0;
  function imgchange(){
    document.getElementById("main-img").src=images[i];
    i++;
    if(i==5){
      i=0;
    }
}