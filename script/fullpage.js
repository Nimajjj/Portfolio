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

let start_color = [158, 187, 187];
let end_color = [78, 92, 92];
let colors = generate_gradient_colors(start_color, end_color, document.querySelectorAll(".section").length);
init_gradient();