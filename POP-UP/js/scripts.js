const popup = document.getElementById('popup');
const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');
const closeButtonText = document.getElementById('close-popup-text');
const learnMoreButton = document.getElementById('learn-more');
const moreInfo = document.getElementById('more-info');

if (openButton && popup) {
  openButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
    openButton.style.opacity = '0.1';
    if (moreInfo) {
      moreInfo.classList.add('hidden');
    }
  });
}

if (closeButton && popup) {
  closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    openButton.style.opacity = '1';
  });
}

if (closeButtonText && popup) {
  closeButtonText.addEventListener('click', () => {
    popup.classList.add('hidden');
    openButton.style.opacity = '1';
  });
}

if (popup) {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.add('hidden');
      openButton.style.opacity = '1';
    }
  });
}

if (learnMoreButton && moreInfo) {
  learnMoreButton.addEventListener('click', () => {
    moreInfo.classList.toggle('hidden');
  });
}
