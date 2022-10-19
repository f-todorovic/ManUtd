const homeSide = document.querySelector('.home__side');
const homeSideFront = document.querySelector('.home__side--front');
const homeSideBack = document.querySelector('.home__side--back');

const homeSidePicture = document.querySelector('.home__side--front--pic');


const hoveringStadiumPicture = function () {
    const width = `${homeSidePicture.width}px`;
    const height = `${homeSidePicture.height}px`;

    homeSideBack.style.width = width;
    homeSideBack.style.height = height;

    homeSideFront.style.display = "none";
    homeSideBack.style.display="flex";
    homeSideBack.style.flexDirection = "column";
    homeSideBack.style.justifyContent="space-evenly";
};

const mouseLeavingStadiumPicture = function () {
    homeSideFront.style.display = "flex";

    homeSideBack.style.display="none";
};

homeSidePicture.addEventListener('mouseover',hoveringStadiumPicture);
homeSidePicture.addEventListener('mouseleave',mouseLeavingStadiumPicture);
