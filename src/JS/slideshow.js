const images = document.querySelectorAll('.slideshow-img')

const nextImageDelay = 3000;
let currentImageCounter = 0;

images[currentImageCounter].style.opacity=1

setInterval(nextImage, nextImageDelay)

function nextImage(){
    images[currentImageCounter].style.zIndex = -2
    const tempCounter = currentImageCounter;
    setTimeout(()=>{
        images[tempCounter].style.opacity = 0

    },1000)
    currentImageCounter = (currentImageCounter+1)%images.length
    images[currentImageCounter].style.opacity = 1
    images[currentImageCounter].style.zIndex = -1

}