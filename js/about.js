window.addEventListener('resize', (event) => {
    event.target.style.fontWeight = "bold";
    console.log(`You're resizing the window`);
})

const CampaingImg = document.querySelector('.hidden');

const mainHeader = document.querySelector('h1');
mainHeader.addEventListener('click', (event) => {
    event.target.style.textTransform = "uppercase";
    event.target.style.fontWeight = "bold";
    event.target.style.textShadow = "2px 2px 2px #1C6EA4";
    setTimeout(function(){event.target.style.textTransform = ""}, 1000);
    setTimeout(function(){event.target.style.fontWeight = ""}, 2000);
    setTimeout(function(){event.target.style.textShadow = ""}, 3000);
}) 

const navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', (event) => {
    event.preventDefault();
    if (event.target.tagName === "A") {
    event.target.style.textShadow = "2px 2px 2px lightseagreen";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    }
})

const compimg = document.querySelector('.compimg');
    console.log(compimg);
    compimg.addEventListener('dblclick', (event) => {
        event.target.setAttribute ("src", "img/cetteup-72915-unsplash.jpg");
        event.stopPropagation();
})

compimg.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/cetteup-72915-unsplash.jpg");
})


