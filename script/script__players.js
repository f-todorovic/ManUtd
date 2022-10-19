'use strict';

const playersImgs = document.querySelectorAll('.players__div--img img');
const playersNames = document.querySelectorAll('.players__div--img span');

const playersBack = document.querySelectorAll('.players__back');

const onMouseEnterPlayerImg = function(e){
    const width = e.target.width;
    const height = e.target.height;

    console.log(`Width: ${width}; Height: ${height}`);

    const parent = e.target.closest('.players__div--img');
    parent.style.display = "none";
    parent.style.transition = "all 0.4s";

    const back = parent.closest('.player').querySelector('.players__back');
    back.width = `${width}px`;
    back.height = `${height}px`;
    back.style.height = "100%";
    back.style.width = "95%";
    back.style.display = "flex";
    back.style.flexDirection="column";
    back.style.justifyContent="space-evenly";
    back.style.transition = "all 0.4s";
};

const onMouseLeaveBack = function(e){
    e.target.style.display = "none";
    e.target.style.transition = "all 0.4s";

    const front = e.target.closest('.player').querySelector('.players__div--img');
    front.style.display = "flex";
    front.style.transition = "all 0.4s";
};

playersImgs.forEach(el=>{
    el.addEventListener('mouseenter', onMouseEnterPlayerImg);
});

playersBack.forEach(el=>{
    el.addEventListener('mouseleave', onMouseLeaveBack);
});