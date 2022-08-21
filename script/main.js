// carousel

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


// fullpage

let fullPage = new fullpage('#fullpage', {
    scrollingSpeed: 600,
    autoScrolling: true,
    keyboardScrolling: true,
    navigation: false,
    fixedElements: '#header',
    anchors: ['home', 'about', 'projects', 'intership', 'contact'],
	menu: '#header',
    credits: { enabled: false },
    onLeave: function(origin, destination, direction, trigger) {
        let children = destination.item.childNodes;
        let page

        for (let i = 0; i < children.length; i++) {
            if (!children[i].nodeName.includes("text")) {
                page = children[i];
                break;
            }
        }

        if (page.querySelector(".right") != null) {
            if (page.querySelector(".right").classList.contains("animate__animated")) return;

            page.querySelector(".right").classList.add("animate__animated", "animate__fadeInRight");
            page.querySelector(".left").classList.add("animate__animated", "animate__fadeInLeft");

            let progress = page.querySelectorAll(".progress");
            if (progress.length > 0) {
                progress.forEach((skill) => {
                    increase(skill, skill.innerHTML.replace("<p>", "").replace("</p>", ""));
                });
            }
        };

        if (page.querySelector("#prev_bt") != null) {
            if (page.querySelector("#prev_bt").classList.contains("animate__animated")) return;

            page.querySelector("#next_bt").classList.add("animate__animated", "animate__fadeInRight");
            page.querySelector("#prev_bt").classList.add("animate__animated", "animate__fadeInLeft");
            page.querySelector(".carousel").classList.add("animate__animated", "animate__fadeIn");
        }; 
    }
});

document.querySelector(".carousel").addEventListener('animationend', () => {
    document.querySelector(".carousel").classList.remove("animate__animated", "animate__fadeIn");
});


function init_gradient() {
    let sections = document.querySelectorAll(".section");
    
    sections.forEach((section, i) => {
        section.style.background = "linear-gradient(180deg, " + colors[i] + " 0%, " + colors[i+1] + " 100%)";
    })
}


function generate_gradient_colors(start, end, step) {
    let result = [];

    for (let i = 0; i <= step; i++) {
        let to_push = "rgba("

        if (i == 0) {
            to_push += start[0] + "," + start[1] + "," + start[2] + ",1)";
        } else if (i == step - 1) {
            to_push += end[0] + "," + end[1] + "," + end[2] + ",1)";
        } else {
            to_push += (start[0] + (((end[0] - start[0]) / step) * (i + 1))) + ",";
            to_push += (start[1] + (((end[1] - start[1]) / step) * (i + 1))) + ",";
            to_push += (start[2] + (((end[2] - start[2]) / step) * (i + 1))) + ",1)";
        }

        result.push(to_push);
    }

    return result;
}

//let start_color = [57, 91, 100];
//let end_color = [44, 51, 51];

let start_color = [158, 187, 187];
let end_color = [78, 92, 92];
let colors = generate_gradient_colors(start_color, end_color, document.querySelectorAll(".section").length);
init_gradient();


// progress

function increase(progress, limit) {
    let SPEED = 40;

    for(let i = 0; i <= parseInt(limit); i++) {
        setTimeout(() => {
            progress.innerHTML = "<p>" + i + "%</p>";
            progress.style.width = i + "%";
        }, SPEED * i);
        console.log(progress.style.width);
    }
}


function init_skills() {
    let progress = document.querySelectorAll(".progress");
    let level = document.querySelectorAll(".skill_level");

    for (let i = 0; i < progress.length; i++) {
        let percent = progress[i].innerHTML.replace("<p>", "").replace("</p>", "");
        progress[i].style.width = 0;

        if (i >= level.length) {
            continue;
        }

        let background;
        if (level[i].innerHTML.includes("beginner")) {
            background = "linear-gradient(90deg, rgba(163,127,154,1) 0%, rgba(240,187,227,1) 100%)"
        } else if (level[i].innerHTML.includes("intermediary")) {
            background = "linear-gradient(90deg, rgba(104,179,179,1) 0%, rgba(139,240,240,1) 100%)"
        }
        progress[i].style.background = background;

        
    }
}

init_skills();



// header 

function init_header() {
    let header = document.querySelector("#header");
    let header_width = header.clientWidth;
    header.style.left = String((window.screen.width / 2) - (header_width / 2)) + "px";
}

init_header();


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


// anim home 

let element = document.querySelector("#p1left");
element.addEventListener('animationend', () => {
    document.querySelector("#header").style.opacity = "1";
    document.querySelector("#header").classList.add("animate__animated", "animate__fadeInDown");
});


// reCaptcha

window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }