let current_page = 0;
let carousel = document.querySelectorAll(".carousel");

function update_carousel(dir) {
    carousel.forEach((page) => {
        page.style.display = "none";

        if (dir != "") {
            carousel[current_page].querySelector("h2").classList.remove("animate__animated", "animate__fadeIn");
            carousel[current_page].querySelectorAll("img").forEach((img) => {
                img.classList.remove("animate__animated", "animate__fadeIn");
            }); 
            carousel[current_page].querySelector("div").querySelectorAll("p").forEach((p) => {
                p.classList.remove("animate__animated", "animate__fadeIn");
            });
        }
        
    });
    carousel[current_page].style.display = "block";
    if (dir != "") {
        carousel[current_page].querySelector("h2").classList.add("animate__animated", "animate__fadeIn");
        carousel[current_page].querySelectorAll("img").forEach((img) => {
            img.classList.add("animate__animated", "animate__fadeIn");
        }); 
        carousel[current_page].querySelector("div").querySelectorAll("p").forEach((p) => {
            p.classList.add("animate__animated", "animate__fadeIn");
        });
    }
    
}

function next_page() {
    current_page++;
    if (current_page > carousel.length - 1) {
        current_page = 0;
    }
    update_carousel("next");
}

function previous_page() {
    current_page--;
    if (current_page < 0) {
        current_page = carousel.length - 1;
    }
    update_carousel("prev");
}


update_carousel("");