const showModal1 = document.querySelector('.show-modal-1');
const showModal2 = document.querySelector('.show-modal-2');
const showModal3 = document.querySelector('.show-modal-3');
const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const overlay = document.querySelector('.overlay');

const allModals = document.querySelectorAll('.modal');
const allCloseModals = document.querySelectorAll('.close-modal');

const closeModal = (modal) => {
    modal.classList.add('hidden');
    modal.classList.remove('active');
    overlay.classList.add('hidden');
}

const closeModalClickHandler = (event) => {
    const parentModal = event.currentTarget.parentNode;
    closeModal(parentModal);
}

const hideActiveModal = () => {
    const activeModal = document.querySelector('.modal.active');
    closeModal(activeModal);
}

const onKeydown = (event) => {
    if (event.keyCode === 27) {
        hideActiveModal();
    }
}

const unhideModal = (modal) => {
    allModals.forEach((m) => {
        m.classList.add('hidden');
        m.classList.remove('active');
    });

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    modal.classList.add('active');
}

const unhideModal1 = () => {
    unhideModal(modal1);
}

const unhideModal2 = () => {
    unhideModal(modal2);
}

const unhideModal3 = () => {
    unhideModal(modal3);
}

document.addEventListener('keydown', onKeydown);
overlay.addEventListener('click', hideActiveModal);
showModal1.addEventListener('click', unhideModal1);
showModal2.addEventListener('click', unhideModal2);
showModal3.addEventListener('click', unhideModal3);

allCloseModals.forEach((m) => m.addEventListener('click', closeModalClickHandler));
