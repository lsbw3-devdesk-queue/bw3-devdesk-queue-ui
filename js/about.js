// Your code goes here
window.addEventListener('load', (event) => {
    event.target.style.fontWeight = "bold";
    CampaingImg.classList.replace('hidden', 'slideRight')
})

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


const compimg = document.querySelector('.cetteup-72915-unsplash.jpg');
compimg.addEventListener('dblclick', (event) => {
    event.target.setAttribute ("src", "img/cetteup-72915-unsplash.jpg");
})

compimg.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/cetteup-72915-unsplash.jpg");
})

const sendBtn = document.querySelector('button');
sendBtn.addEventListener('click', (event) => {
    alert(`Your message has been sent!`);
    event.stopPropagation();
});

const selectText = document.querySelector('.textarea');
selectText.addEventListener('select', (event) => {
    event.target.style.fontWeight = "bold";
    alert(`This content is protected by copyright law. Copying this contact is a felony and will result in loss of limbs and your ISP.`);
})

var dragNDrop = document.querySelector('.dragndrop');
dragNDrop.addEventListener('drag', (event) => {
    event.target.style.fontWeight = "bold";
    console.log("You're not ready!");
}, false);

selectText.addEventListener('drop', (event) => {
    event.target.style.background = "black";
    event.target.style.color = "white";
    event.preventDefault();
})