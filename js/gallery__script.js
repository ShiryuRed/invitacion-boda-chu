const modal = document.querySelector(".modal");

const imgModal = document.querySelector(".modal-img");

const imgGallery = document.querySelectorAll(".img-gallery");

const imgOutfit = document.querySelectorAll(".img-outfit");

const imgSrc = document.querySelector(".modal-img-front");


let modalImgOn = false;

function imgOn() {
    setTimeout(function(){
        imgModal.classList.toggle("off-1");
  }, 300);
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 20);
    noScroll();
    modal.removeAttribute("hidden");
    modalImgOn = true;
};


function imgOff() {
    imgModal.classList.toggle("off-1");
    setTimeout(function(){
    modal.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 200);
};

imgGallery.forEach(imageGallery =>{
    imageGallery.addEventListener('click', ()=>{
        let src = imageGallery.getAttribute('src');
        imgSrc.setAttribute("src", src);
        imgOn();
    })
})

imgOutfit.forEach(imageOutfit =>{
    imageOutfit.addEventListener('click', ()=>{
        let src = imageOutfit.getAttribute('src');
        imgSrc.setAttribute("src", src);
        imgOn();
    })
})

modal.addEventListener("click",()=>{
    imgOff();
    modalImgOn = false;
});


imgSrc.addEventListener('click',(e)=>{
    e.stopPropagation();
});


body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && modalImgOn == true) {
    imgOff();
    modalImgOn = false;
    }
});
