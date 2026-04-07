let score = 0;
let cross = true;
let gameOver = false;

let scoreCont = document.querySelector('#scoreCont');

let audio = new Audio('audio.mp3');

audio.play();

document.onkeydown = function(e) {

    if (gameOver) return;

    let dino = document.querySelector('.dino');

    // Jump
    if (e.key === "ArrowUp") {
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }

    // Move Right
    if (e.key === "ArrowRight") {
        let dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    // Move Left
    if (e.key === "ArrowLeft") {
        let dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
};

setInterval(() => {

    if (gameOver) return;

    let dino = document.querySelector('.dino');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    // Collision
    if (offsetX < 73 && offsetY < 52) {
        gameOver = true;
        audio.play();
        obstacle.classList.remove('obstacleAni');
        document.querySelector('.gameOver').style.visibility = 'visible';}
        else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;

        let aniDur = parseFloat(
            window.getComputedStyle(obstacle).getPropertyValue('animation-duration')
        );

        let newDur = aniDur - 0.02; 

        if (newDur > 0.5) { 
            obstacle.style.animationDuration = newDur + 's';
        }

        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 10);


// Update Score
function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}