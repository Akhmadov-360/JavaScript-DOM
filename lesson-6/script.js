const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});


const closeBtns = document.querySelectorAll('.close');


closeBtns.forEach(close => {
  close.addEventListener('click', function() {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
  });
});


window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});