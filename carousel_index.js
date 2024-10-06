function carousel_img() {
    //console.log("Start Carousel");
    const imgs = [
        {"src" : "photos/index1.jpg", "alt" : "mountain"},
        {"src" : "photos/index2.jpg", "alt" : "hut on mountain"},
        {"src" : "photos/index3.jpg", "alt" : "soba"},
        {"src" : "photos/index4.jpg", "alt" : "shrine"},
    ];

    /* Get the section of carousel */
    let carousel = document.getElementById('carousel_inner');
    let status = true;

    for (let img of imgs) {
        // Structure
            // <div class="carousel-item active">
            //     <img src="photos/index4.jpg" class="d-block w-100" alt="...">
            // </div>

        var item = document.createElement("div");
        if (status) {  
            item.setAttribute("class", "carousel-item active");
            status = false;
        }
        else {
            item.setAttribute("class", "carousel-item");
        }
        var image = document.createElement("img");
        image.setAttribute("src", img.src)
        image.setAttribute("alt", img.alt);
        image.setAttribute("class", "d-block w-100");
        item.appendChild(image);

        carousel.appendChild(item);
    }
    //console.log(carousel);
    //console.log("End Carousel");
}

// Call all needed functions
carousel_img();