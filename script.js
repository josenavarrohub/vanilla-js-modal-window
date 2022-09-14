'use strict';

// Elements
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Event handlers
const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Event listeners
for (const btn of showModalBtns)
    btn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', e => (e.key === 'Escape') && hideModal());
