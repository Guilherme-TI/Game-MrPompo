const mrPompo = document.querySelector('.mr-pompo');
const cacto = document.querySelector('.cacto');

const jump = () =>{
    mrPompo.classList.add('jump');
    setTimeout(()=>{
        mrPompo.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const cactoPosition = cacto.offsetLeft;
    const pompoPosition = +window.getComputedStyle(mrPompo).bottom.replace('px', '0');

    if(cactoPosition <= 70 && cactoPosition > 0 && pompoPosition < 100){
        gameOver();
    }

    function gameOver() {
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;

        mrPompo.style.animation = 'none';
        mrPompo.style.left = `${pompoPosition}px`;

        mrPompo.src = 'imagens/fantasma.gif';
        mrPompo.style.width = '150px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);