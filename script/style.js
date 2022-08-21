// header 

function init_header() {
    let header = document.querySelector("#header");
    let header_width = header.clientWidth;
    header.style.left = String((window.screen.width / 2) - (header_width / 2)) + "px";
}


// hover effect

let buttons = document.querySelectorAll(".hover_effect");

buttons.forEach((bt) => {
    bt.addEventListener("mouseover", (e) => {
        let obj;
        e.srcElement ? obj = e.srcElement : obj = e.target;
        obj.classList.add("animate__animated", "animate__flash", "animate__infinite", "animate__slow");
    });

    bt.addEventListener("mouseout", (e) => {
        let obj;
        e.srcElement ? obj = e.srcElement : obj = e.target;
        obj.classList.remove("animate__animated", "animate__flash", "animate__infinite", "animate__slow");
    });
})


// animation home page 

let element = document.querySelector("#p1left");
element.addEventListener('animationend', () => {
    document.querySelector("#header").style.opacity = "1";
    document.querySelector("#header").classList.add("animate__animated", "animate__fadeInDown");
});


init_header();