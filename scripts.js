// Open modal
document.querySelectorAll('.btn[data-modal]').forEach(btn => {
  btn.addEventListener('click', function () {
    const modal = document.getElementById(this.getAttribute('data-modal'));
    if (modal) modal.style.display = 'flex';
  });
});

// Close modal via X button
document.querySelectorAll('.close-modal').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

// Close modal by clicking the backdrop
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Close modal with Escape key
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }
});
