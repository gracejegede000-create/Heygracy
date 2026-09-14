// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Resume Modal Handlers
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal(event) {
  if (
    event.target.id === 'resume-modal' ||
    event.target.classList.contains('modal-close')
  ) {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
}

// Lightbox Modal Handlers for Proof Images
function openLightbox(imageSrc, captionText) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightbox && lightboxImg && lightboxCaption) {
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = captionText;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(event) {
  if (
    event.target.id === 'lightbox' || 
    event.target.classList.contains('lightbox-close')
  ) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
}

// Global ESC key listener to close active modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const resumeModal = document.getElementById('resume-modal');
    const lightbox = document.getElementById('lightbox');

    if (resumeModal && resumeModal.classList.contains('active')) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    if (lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});