import css from "./style.css";
import createSliderGallery from './modules/slider.js'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'


const root = document.getElementById('content');
const galleryContainer = document.createElement('div');
galleryContainer.id = 'gallery-container';
galleryContainer.append(createSliderGallery([image1, image2, image3, image4, image5, image6, image7, image8, image9]));
root.append(galleryContainer);