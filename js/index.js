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
    if (event.target.tagName === "A") {
    event.target.style.textShadow = "2px 2px 2px coral";
    setTimeout(function(){event.target.style.textShadow = "none"}, 300);
    }
    event.preventDefault();
})


const funBus = document.querySelector('.fun-bus-img');
funBus.addEventListener('dblclick', (event) => {
    event.target.setAttribute ("src", "img/funbus.png");
    event.stopPropagation();
})

funBus.addEventListener('wheel', (event) => {
    event.target.setAttribute ("src", "img/fun-bus.jpg");
})

const subscribe = document.querySelector('#email');
subscribe.addEventListener('keydown', (event) => {
    console.log(`${event.key}`);
})

subscribe.addEventListener('focus', (event) => {
    event.target.style.background = "yellow";
}, true);

subscribe.addEventListener('blur', (event) => {
    event.target.style.background = "";    
  }, true);

const submitEmailBtn = document.querySelector('.subscribe');
submitEmailBtn.addEventListener('click', (event) => {
    alert(`WARNING! ALL YOUR EMAIL ARE BELONG TO US`)
    event.stopPropagation();
})

const signUpBtn1 = document.querySelector('#btn-1');
signUpBtn1.addEventListener('mouseenter', (event) => {
    alert(`Are you sure you want to delete your harddrive?`)
})

const signUpBtn2 = document.querySelector('#btn-2');
signUpBtn2.addEventListener('mouseenter', (event) => {
    event.target.style.transform = "scale(2)";
    setTimeout(function(){event.target.style.transform = ""}, 3000);
})

const signUpBtn3 = document.querySelector('#btn-3');
signUpBtn3.addEventListener('dblclick', (event) => {
    event.target.textContent = "THE CAKE IS A LIE"
    event.stopPropagation();
})

const home = document.querySelector('.home');

home.addEventListener('mouseover', (event) => {
    if (event.target.tagName === "P"){
    event.target.style.color = "white";
    event.target.style.background = "black";
    setTimeout(function(){event.target.style.color = ""}, 3000);
    setTimeout(function(){event.target.style.background = ""}, 2000);
    }
})

home.addEventListener('mouseover', (event) => {
    if (event.target.tagName === "H2" || event.target.tagName === "H4"){
    event.target.style.color = "white";
    event.target.style.background = "black";
    setTimeout(function(){event.target.style.color = ""}, 3000);
    setTimeout(function(){event.target.style.background = ""}, 2000);
    }
})

window.addEventListener('dblclick', (event) => {
    event.target.style.background = "purple";
    setTimeout(function(){event.target.style.background = ""}, 5000);
})

const mainContain = document.querySelector('.home')

mainContain.addEventListener('dblclick', (event) => {
    event.stopPropagation();
})

const topBar = document.querySelector('.main-navigation');
topBar.addEventListener('dblclick', (event) => {
    event.stopPropagation();
})
