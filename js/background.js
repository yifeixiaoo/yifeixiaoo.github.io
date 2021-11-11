// Image Selector

imageArray = ['./contents/background1.jpg', './contents/background2.jpg', './contents/background3.jpg', './contents/background4.jpg', './contents/background5.jpg', './contents/background6.jpg'];
creatorArray = ['Thanos Pal', 'Anders Jilden', 'Ken Cheung','Andre Benz', 'Marek Piwnicki', 'Daniel Leone'];

function random_image(){
  random_index = Math.floor(Math.random() * imageArray.length);
  random_pic = imageArray[random_index];
  random_creator = creatorArray[random_index];
  document.body.style.backgroundImage = "url(" + random_pic + ")";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.getElementById("author").textContent = random_creator;
}
random_image();
  