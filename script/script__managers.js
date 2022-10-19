const managerSelectionBusby = document.querySelector('.manager__selection--first');
const managerSelectionFergie = document.querySelector('.manager__selection--second');
const managerSelectionGaal = document.querySelector('.manager__selection--third');

const managerBusby = document.querySelector('.manager__busby');
const managerFergie = document.querySelector('.manager__ferguson');
const managerGaal = document.querySelector('.manager__gaal');

const onClickingBusby = function () {
    if(managerBusby.classList.contains('hidden')){
        managerBusby.classList.remove('hidden');
        managerSelectionBusby.classList.add('active');
        managerFergie.classList.add('hidden');
        managerSelectionFergie.classList.remove('active');
        managerGaal.classList.add('hidden');
        managerSelectionGaal.classList.remove('active');
    }
};

const onClickingFergie = function () {
    if(managerFergie.classList.contains('hidden')){
        managerFergie.classList.remove('hidden');
        managerSelectionFergie.classList.add('active');
        managerBusby.classList.add('hidden');
        managerSelectionBusby.classList.remove('active');
        managerGaal.classList.add('hidden');
        managerSelectionGaal.classList.remove('active');
    }
};

const onClickingGaal = function(){
    if(managerGaal.classList.contains('hidden')){
        managerGaal.classList.remove('hidden');
        managerSelectionGaal.classList.add('active');
        managerBusby.classList.add('hidden');
        managerSelectionBusby.classList.remove('active');
        managerFergie.classList.add('hidden');
        managerSelectionFergie.classList.remove('active');
    }
};

managerSelectionBusby.addEventListener('click',onClickingBusby);
managerSelectionFergie.addEventListener('click',onClickingFergie);
managerSelectionGaal.addEventListener('click',onClickingGaal);