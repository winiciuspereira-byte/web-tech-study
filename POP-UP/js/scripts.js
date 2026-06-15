const popup = document.getElementById('popup');
const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');
const learnMoreButton = document.getElementById('learn-more');
const moreInfo = document.getElementById('more-info');

openButton.onclick = () => {
  popup.classList.remove('hidden');
  moreInfo.classList.add('hidden');
};

closeButton.onclick = () => popup.classList.add('hidden');
learnMoreButton.onclick = () => moreInfo.classList.toggle('hidden');
