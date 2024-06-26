const accessKey = 'kYpiX_AGhUF1cQL8IQYkOyLXYaccfQfvR6Umf_wlt6I';
const query = 'dark landscape';
const imageWidth = 1920;
const imageHeight = 1080;

function setUnsplashBackground(imageUrl, creator) {
    const backgroundPic = document.getElementById('background_pic');

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        backgroundPic.style.setProperty('--background-image-url', `url('${imageUrl}')`);
        backgroundPic.classList.add('loaded');
        document.getElementById('author').textContent = creator;
    };
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
    'https://yifeixiaoo.github.io/contents/background1.jpg',
    'https://yifeixiaoo.github.io/contents/background2.jpg',
    'https://yifeixiaoo.github.io/contents/background3.jpg',
    'https://yifeixiaoo.github.io/contents/background4.jpg',
    'https://yifeixiaoo.github.io/contents/background5.jpg',
    'https://yifeixiaoo.github.io/contents/background6.jpg',
];

const creatorArray = ['Thanos Pal', 'Anders Jilden', 'Ken Cheung', 'Andre Benz', 'Marek Piwnicki', 'Daniel Leone'];

function random_image() {
    random_index = Math.floor(Math.random() * imageArray.length);
    random_pic = imageArray[random_index];
    random_creator = creatorArray[random_index];

    setUnsplashBackground(random_pic, random_creator);
}

unsplashImage();
