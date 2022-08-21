function loadScript(url, callback) {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}


loadScript("script/fullpage.js", null);
loadScript("script/carousel.js", null);
loadScript("script/skills.js", null);
loadScript("script/style.js", null);