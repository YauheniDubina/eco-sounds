const audioPleer = document.querySelector("audio");
const btnPlayPause = document.querySelector("button");
const soundOptions = document.querySelectorAll(".header__sounds-item");
const mainBg = document.querySelector("main");

//Audio pley/stop
function playAudio() {
  // audioPleer.currentTime=0;
  audioPleer.play();
}
function pauseAudio() {
  audioPleer.pause();
}
//  Remove class active from inactive nav buttons when user click
function checkActive() {
  soundOptions.forEach((btn) => {
    btn.classList.remove("active");
  });
}

//add listener nav buttons
soundOptions.forEach((btn) =>
  btn.addEventListener("click", () => {
    checkActive();
    btnPlayPause.classList.remove("play-btn");
    checkBtnPlayPause();
    btn.classList.toggle("active");
    audioPleer.src = `/assets/audio/${btn.dataset.item}.mp3`;
    mainBg.style.backgroundImage = `url(/assets/img/${btn.dataset.item}.jpg)`;

    playAudio();
  })
);
//check status of pleer button (remove/add play class)
function checkBtnPlayPause() {
  if (!btnPlayPause.classList.contains("play-btn")) {
    btnPlayPause.classList.toggle("play-btn");

    playAudio();
    return;
  } else btnPlayPause.classList.toggle("play-btn");
  pauseAudio();
}

//add listener pleer button
btnPlayPause.addEventListener("click", checkBtnPlayPause);
