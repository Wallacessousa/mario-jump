const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const bgclouds = document.querySelector('.bgclouds');
const goomba = document.querySelector('.goomba');
const startBtn = document.querySelector('#startBtn');

const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const milisecondsEl = document.querySelector('#miliseconds');

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let itsPaused = false;



function startTimer() {
    interval = setInterval(() =>{
        if(itsPaused){
            miliseconds += 10;
            

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
            milisecondsEl.textContent = miliseconds;
        }
    }, 10);
}


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const bgcloudsPosition = bgclouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;
        
        bgclouds.style.animation = "none";
        bgclouds.style.left = `${bgcloudsPosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/gameovermario.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);