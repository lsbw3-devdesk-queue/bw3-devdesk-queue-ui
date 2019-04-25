window.addEventListener('resize', (event) => {
    console.log(`You're resizing the window`);
})

const navLinks = document.querySelector('.nav');

navLinks.addEventListener('mouseover', (event) => {
    event.preventDefault();
    if (event.target.tagName === "A") {
    event.target.style.textShadow = "2px 2px 2px lightseagreen";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    }
})


