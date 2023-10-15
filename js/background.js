const accessKey = 'kYpiX_AGhUF1cQL8IQYkOyLXYaccfQfvR6Umf_wlt6I';
const query = 'dark landscape';
const imageWidth = 1920; 
const imageHeight = 1080; 

function setUnsplashBackground(imageUrl, creator) {
    // Apply the Unsplash image
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Update the author information
    document.getElementById("author").textContent = creator;
}

function unsplashImage() {
    fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`)
        .then((response) => response.json())
        .then((data) => {
          const imageUrl = `${data.urls.raw}&fit=crop&auto=format&w=${imageWidth}&h=${imageHeight}`;
            const creator = data.user.name;

            setUnsplashBackground(imageUrl, creator);
        })
        .catch((error) => {
            random_image();
        });
}

const imageArray = [
    './contents/background1.jpg',
    './contents/background2.jpg',
    './contents/background3.jpg',
    './contents/background4.jpg',
    './contents/background5.jpg',
    './contents/background6.jpg',
];
const creatorArray = ['Thanos Pal', 'Anders Jilden', 'Ken Cheung', 'Andre Benz', 'Marek Piwnicki', 'Daniel Leone'];

function random_image() {
    random_index = Math.floor(Math.random() * imageArray.length);
    random_pic = imageArray[random_index];
    random_creator = creatorArray[random_index];

    setUnsplashBackground(random_pic, random_creator);
}

unsplashImage();
