alert("Hi Swetha Kalyan Krishnan..");
alert("just a gentle reminder!\nIf the song is not playing on the background,\ncheck the top left corner and hit the play button.");
alert("made with love.. just for you");
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
