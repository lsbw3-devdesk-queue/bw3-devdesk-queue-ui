window.addEventListener('resize', (event) => {
    console.log(`You're resizing the window`);
})

const mainHeader = document.querySelector('h1');
mainHeader.addEventListener('click', (event) => {
    event.target.style.textTransform = "uppercase";
    event.target.style.fontWeight = "bold";
    event.target.style.textShadow = "2px 2px 2px #1C6EA4";
    setTimeout(function(){event.target.style.textTransform = ""}, 1000);
    setTimeout(function(){event.target.style.fontWeight = ""}, 2000);
    setTimeout(function(){event.target.style.textShadow = ""}, 3000);
}) 

const Btn1 = document.querySelector('#btn-1');
    Btn1.addEventListener('click', (event) => {
    alert(`Are you sure you don't want help?`);
    location.href='about.html';
})

const Btn2 = document.querySelector('#btn-2');
    Btn2.addEventListener('click', (event) => {
    alert(`The FAQ Page is Under Construction`);
})
