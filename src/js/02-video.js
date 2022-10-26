import "../styles/main.scss";

const iframePlayerRef = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframePlayerRef);

player.on("timeupdate", function (data) {
  const { seconds } = data;
  localStorage.setItem("playingTime", seconds);
  console.log(seconds);
});

player.setCurrentTime(localStorage.getItem("playingTime"));
