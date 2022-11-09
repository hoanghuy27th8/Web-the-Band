
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function openModal () { // hiện form mua vé
    modal.classList.add('open');
}
function closeModal(){ // ẩn form mua vé
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', openModal); // nhấn nút mua
}
//Nghe nhấn nút X
modalclose.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
modalContainer.addEventListener('click', function (event){
    event.stopPropagation();
})