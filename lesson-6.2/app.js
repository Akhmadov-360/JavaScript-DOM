window.addEventListener("scroll", bottom);

function bottom() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop + windowHeight >= documentHeight) {
        alert("Вы долистали до конца страницы!");
    }
} 