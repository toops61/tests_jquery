let onglets = document.querySelectorAll('ul li a');
function ciblerOnglets(param) {
    if (param.parentNode.classList.contains('active') === false){ 
        document.querySelector('li.active').classList.remove('active');
        document.querySelector('div.tabs__content.active').classList.remove('active');
        param.parentNode.classList.add('active');
        document.querySelector(param.getAttribute('href')).classList.add('active');
        }
}
for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function () {
        ciblerOnglets(this);
    })    
}
if (window.location.hash != 0) {
    let urlHash = window.location.hash;
    let target = "a[href='" + urlHash + "']";
    let lienUrl = document.querySelector(target);
    ciblerOnglets(lienUrl);
}

//fonction arrowUp pour scroll top
let arrow = document.getElementById('arrow-up');
function arrowAppears() {
    arrow.classList.add('appears');
}

function arrowUp() {
    window.scroll(0,0);
}

window.addEventListener('scroll', function () {
    if (this.scrollY > 150) {
        arrowAppears();
    } else {
        arrow.classList.remove('appears');
    }
})
arrow.addEventListener('click', arrowUp);

//btn on.off
let onOff = document.getElementById('switch-onOff');
let switchButton = onOff.firstElementChild;
onOff.addEventListener('click', function () {
    switchButton.classList.toggle('switched');
    setTimeout(function () {
        document.querySelector('body').classList.toggle('dark');
            if (switchButton.textContent === "on") {
                switchButton.textContent = "off";
            } else {
                switchButton.textContent = "on";
            }
    }, 300);
})
