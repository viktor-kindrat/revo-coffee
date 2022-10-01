let state = 'paused';
let icon = document.querySelector('.home__btn');
let playBtn = document.querySelector('.home__play-btn');

playBtn.addEventListener('click', function(){
    if (state === 'paused') {
        document.querySelector('.home__video').play();
        state = 'play';
        icon.classList.remove('home__play');
        icon.classList.add('home__pause');
        playHide()
        playBtn.addEventListener('mouseenter', playShow)
        playBtn.addEventListener('mouseleave', playHide)
    } else {
        document.querySelector('.home__video').pause();
        state = 'paused';
        icon.classList.remove('home__pause');
        icon.classList.add('home__play');
        playShow()
        playBtn.removeEventListener('mouseenter', playShow);
        playBtn.removeEventListener('mouseleave', playHide);
        playShow()
    }
    console.log(state)
})


function playShow() {
    playBtn.style.opacity = 1
}
function playHide() {
    playBtn.style.opacity = 0
}