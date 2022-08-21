const gallery = [];
let currentPosition = 0;

export default function createSliderGallery(imagesArray) {
    imagesArray.forEach(image => gallery.push(image));
    const galleryWindow = document.createElement('div');
    galleryWindow.style.width = '100%';
    galleryWindow.style.height = '100%';
    galleryWindow.style.position = 'relative';
    galleryWindow.style.overflow = 'hidden';
    galleryWindow.id = 'gallery-window';

    const galleryHolder = createGalleryHolder();
    galleryWindow.append(galleryHolder, createImageSwitchButtonLeft(), createImageSwitchButtonRight(), createCurrentPositionIndicator());
    return galleryWindow
}

function createGalleryHolder() {
    const galleryHolder = document.createElement('div');
    galleryHolder.classList.add('gallery-slider');
    galleryHolder.id = 'gallery-slider'
    galleryHolder.style.display = 'flex'
    galleryHolder.style.width = '100%';
    galleryHolder.style.height = '100%';
    galleryHolder.style.position = 'absolute';
    galleryHolder.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0s'
    galleryHolder.style.right = '0'
    gallery.forEach(image => {
        galleryHolder.append(createImageHolder(image));
    })
    return galleryHolder
}


function createImageHolder(image) {
    const imageHolder = document.createElement('div');
    imageHolder.classList.add(`slider-image`);
    imageHolder.style.position = 'relative';
    imageHolder.style.flex = '1 0 100%';
    imageHolder.append(createBackground(image), createImageContent(image));
    imageHolder.style.width = '100%';
    imageHolder.style.height = '100%';

    return imageHolder
}


function createBackground(image) {
    const backgroundHolder = document.createElement('div');
    const backgroundImage = document.createElement('img');
    backgroundImage.setAttribute('src', `${image}`);
    backgroundImage.style.width = '100%';
    backgroundImage.style.height = '100%';
    backgroundHolder.setAttribute('style', 'filter:blur(5px) brightness(.5)');
    backgroundHolder.style.width = '105%';
    backgroundHolder.style.height = '105%';
    backgroundHolder.style.backgroundRepeat = 'no-repeat';
    backgroundHolder.style.backgroundPosition = 'center';
    backgroundHolder.style.objectFit = 'cover';
    backgroundHolder.style.position = 'absolute';
    backgroundHolder.style.top = '-5px';
    backgroundHolder.style.left = '-5px';
    backgroundHolder.style.zIndex = '-1';
    backgroundHolder.append(backgroundImage);

    return backgroundHolder
}

function createImageContent(image) {
    const imageContent = document.createElement('img');
    imageContent.setAttribute('src', `${image}`);
    imageContent.setAttribute('id', `slider-gallery-image`);
    imageContent.style.width = '100%';
    imageContent.style.height = '100%';
    imageContent.style.objectFit = 'contain';

    return imageContent
}

function createImageSwitchButtonLeft() {
    const buttonLeft = document.createElement('button');
    buttonLeft.setAttribute('id', 'gallery-button-left');
    buttonLeft.innerText = '⮜'
    buttonLeft.style.width = '50px';
    buttonLeft.style.height = '50px';
    buttonLeft.style.borderRadius = '100%'
    buttonLeft.style.border = 'none'
    buttonLeft.style.position = 'absolute';
    buttonLeft.style.top = 'calc(50% - 25px)';
    buttonLeft.style.left = '20px';
    buttonLeft.addEventListener('click', () => switchImage('left'))

    return buttonLeft
}

function createImageSwitchButtonRight() {
    const buttonRight = document.createElement('button');
    buttonRight.setAttribute('id', 'gallery-button-left');
    buttonRight.innerText = '⮞'
    buttonRight.style.width = '50px';
    buttonRight.style.height = '50px';
    buttonRight.style.borderRadius = '100%'
    buttonRight.style.border = 'none'
    buttonRight.style.position = 'absolute';
    buttonRight.style.top = 'calc(50% - 25px)';
    buttonRight.style.right = '20px';
    buttonRight.addEventListener('click', () => switchImage('right'))

    return buttonRight
}

function switchImage(direction) {
    const imageHolder = document.getElementById('gallery-slider');
    const galleryWindow = document.getElementById('gallery-window');
    const widthOfTheGallery = galleryWindow.offsetWidth;
    switch (direction) {
        case 'left':
            if (currentPosition !== 0) {
                currentPosition--;
                imageHolder.style.right = `${currentPosition * widthOfTheGallery}px`;
                positionIndicatorSwitch();
            }
            break;
        case 'right':
            if (currentPosition !== (gallery.length - 1)) {
                currentPosition++;
                imageHolder.style.right = `${currentPosition * widthOfTheGallery}px`;
                positionIndicatorSwitch();

            }
            break;
        default:
            break;
    }
}

function createCurrentPositionIndicator() {
    const dotHolder = document.createElement('nav');
    dotHolder.style.position = 'absolute';
    dotHolder.style.bottom = '10px';
    dotHolder.style.left = '0';
    dotHolder.style.right = '0';
    dotHolder.style.marginLeft = 'auto'
    dotHolder.style.marginRight = 'auto'
    dotHolder.style.textAlign = 'center'
    for (let i = 0; i < gallery.length; i++) {
        const dot = document.createElement('button')
        dot.id = `gallery-dot-${i}`
        dot.classList.add(`gallery-dot`)
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.border = 'none';
        dot.style.borderRadius = '100%';
        dot.style.margin = '0 1%';
        dot.style.boxShadow = '0 0 10px #000000A0'
        i === 0 ? dot.style.backgroundColor = '#FFFFFF' : dot.style.backgroundColor = '#FFFFFF50'
        dotHolder.append(dot);
    }
    return dotHolder;
}

function positionIndicatorSwitch() {
    const dots = document.querySelectorAll('.gallery-dot');
    dots.forEach(dot => {
        (dot.id === `gallery-dot-${currentPosition}`) ? dot.style.backgroundColor = '#FFFFFF' : dot.style.backgroundColor = '#FFFFFF50'
    })
}