const lightbox = document.querySelector('#photo-lightbox');
const photoLinks = [...document.querySelectorAll('[data-lightbox]')];

// Keep the image links working even when JavaScript or <dialog> is unavailable.
if (lightbox && typeof lightbox.showModal === 'function') {
  const photo = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  const status = lightbox.querySelector('[data-photo-status]');
  const closeButton = lightbox.querySelector('[data-close]');
  let currentIndex = 0;
  let opener;
  let previousOverflow;

  function showPhoto(index) {
    currentIndex = (index + photoLinks.length) % photoLinks.length;
    const link = photoLinks[currentIndex];
    const thumbnail = link.querySelector('img');
    photo.src = link.href;
    photo.alt = thumbnail.alt;
    caption.textContent = link.dataset.caption || thumbnail.alt;
    status.textContent = `${currentIndex + 1} / ${photoLinks.length}`;
  }

  photoLinks.forEach((link, index) => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      showPhoto(index);
      previousOverflow = document.body.style.overflow;
      lightbox.showModal();
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.querySelector('[data-prev]').addEventListener('click', () => showPhoto(currentIndex - 1));
  lightbox.querySelector('[data-next]').addEventListener('click', () => showPhoto(currentIndex + 1));
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      const buttons = [...lightbox.querySelectorAll('button')];
      const focusedIndex = buttons.indexOf(document.activeElement);
      const step = event.shiftKey ? -1 : 1;
      event.preventDefault();
      // WebKit on macOS may skip buttons in its default Tab order.
      buttons[(focusedIndex + step + buttons.length) % buttons.length].focus();
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target !== lightbox) return;
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      lightbox.close();
    }
  });
  lightbox.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    photo.removeAttribute('src');
    opener?.focus({ preventScroll: true });
  });
}
