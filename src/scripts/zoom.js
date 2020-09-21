const image = document.querySelector(".feature__image-zoom");

function handleZoom () {
    if(!image.classList.contains("feature__image-zoom--zoom-in")) {
        image.classList.add("feature__image-zoom--zoom-in");
    } else {
        image.classList.remove("feature__image-zoom--zoom-in");
    }
}

image.addEventListener("click", handleZoom)