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