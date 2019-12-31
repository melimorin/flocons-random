// Fonction qui retourne un chiffre random

function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Fonction qui genere le flocon

function generateFlake() {

    // var floconBleu = document.createElement("img");
    // floconBleu.classList.add("floconBleu");
    // floconBleu.setAttribute("src", "images/flocon-bleu.png");

    var floconOr = document.createElement("img");
    floconOr.classList.add("floconOr");
    floconOr.setAttribute("src", "images/flocon-or.png");

    // variable qui contient le witdh random des flocons

    var flakeWidth = createRandom(25, 100);

    floconOr.style.width = flakeWidth + "px";
    floconOr.style.top = flakeWidth * -1 + "px";
    floconOr.style.left = createRandom(0, window.innerWidth - flakeWidth) + "px";
    floconOr.style.position = "fixed";
    floconOr.style.zIndex = 1;

    // floconBleu.style.width = flakeWidth + "px";
    // floconBleu.style.top = flakeWidth * -1 + "px";
    // floconBleu.style.left = createRandom(0, window.innerWidth - flakeWidth) + "px";
    // floconBleu.style.position = "fixed";
    // floconBleu.style.zIndex = 1;

    // Fonction qui fait partir le flocon d'en haut de l'ecran, jusqu'en bas et le retire
    var flakeInterval = setInterval(function() {
        floconOr.style.top = floconOr.offsetTop + 1 + "px";
        if (floconOr.offsetTop >= window.innerHeight) {
            clearInterval(flakeInterval);
            document.body.removeChild(floconOr);
        }
    }, 10)

    // var flakeInterval = setInterval(function() {
    //     floconBleu.style.top = floconBleu.offsetTop + 1 + "px";
    //     if (floconBleu.offsetTop >= window.innerHeight) {
    //         clearInterval(flakeInterval);
    //         document.body.removeChild(floconBleu);
    //     }
    // }, 10)

    document.body.appendChild(floconOr);
    // document.body.appendChild(floconBleu);
}


// Fonction qui genere plusieurs flocons
setInterval(function() {
    generateFlake();
}, 1200)

const svgPath = document.querySelectorAll('.st0');

console.log(svgPath);

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: (el, i) => { return i * 500 }
});