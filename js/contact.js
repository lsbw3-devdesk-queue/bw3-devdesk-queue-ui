// Your code goes here
window.addEventListener('load', (event) => {
    busInImg.classList.replace('hidden', 'slideRight')
})

window.addEventListener('resize', (event) => {
    console.log(`You're resizing the window`);
})

const busInImg = document.querySelector('.hidden');

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
    event.target.style.textShadow = "2px 2px 2px coral";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    }
})


const funBus = document.querySelector('.fun-bus-img');
funBus.addEventListener('dblclick', (event) => {
    event.target.setAttribute ("src", "img/funbus.png");
})

funBus.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/fun-bus.jpg");
})

const sendBtn = document.querySelector('button');
sendBtn.addEventListener('click', (event) => {
    alert(`Your message has been sent!`);
    event.stopPropagation();
});

const selectText = document.querySelector('.textarea');
selectText.addEventListener('select', (event) => {
    alert(`This content is protected by copyright law. Copying this contact is a felony and will result in loss of limbs and your ISP.`);
})

var dragNDrop = document.querySelector('.dragndrop');
dragNDrop.addEventListener('drag', (event) => {
    console.log("You're a drag!");
}, false);

selectText.addEventListener('drop', (event) => {
    event.target.style.background = "black";
    event.target.style.color = "white";
    event.preventDefault();
})