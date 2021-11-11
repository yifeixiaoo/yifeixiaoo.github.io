// Image Selector

imageArray = ['./contents/background1.jpg', './contents/background2.jpg', './contents/background3.jpg', './contents/background4.jpg', './contents/background5.jpg', './contents/background6.jpg'];
CreatorArray = ['', '', '','Andre Benz', 'Marek Piwnicki', 'Daniel Leone'];

function random_image(){
  random_index = Math.floor(Math.random() * imageArray.length);
  random_pic = imageArray[random_index];
  document.body.style.backgroundImage = "url(" + random_pic + ")";
}
random_image();
  