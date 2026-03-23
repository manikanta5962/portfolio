function toggleContent(id) {
    let content = document.getElementById(id);
    content.classList.toggle("show");
}

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
    }
    window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 4000); 
});
