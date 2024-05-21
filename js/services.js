let lightboxScrollPosition = 0;
const services = document.querySelector('.services-list');
const lightboxImageContainers = document.querySelectorAll('.services-list li');

function scrollServices(direction) {
  const containerWidth = lightboxImageContainers[0].offsetWidth;
  const visibleContainers = Math.floor(services.offsetWidth / containerWidth);
  const lightboxWidth = containerWidth * lightboxImageContainers.length;

  if (direction === 'left') {
      lightboxScrollPosition += containerWidth;
      if (lightboxScrollPosition > 0) {
        lightboxScrollPosition = -(lightboxWidth - (containerWidth * visibleContainers));
      }
  } else if (direction === 'right') {
    lightboxScrollPosition -= containerWidth;
      if (lightboxScrollPosition < -(lightboxWidth - (containerWidth * visibleContainers))) {
        lightboxScrollPosition = 0;
      }
  }

  services.style.transform = `translateX(${lightboxScrollPosition}px)`;
}