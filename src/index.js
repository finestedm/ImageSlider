import css from "./style.css";
import createSliderGallery from './modules/slider.js'

const root = document.getElementById('content');
const galleryContainer = document.createElement('div');
galleryContainer.id = 'gallery-container';
galleryContainer.append(createSliderGallery());
root.append(galleryContainer);