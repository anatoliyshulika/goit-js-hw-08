import "../styles/main.scss";
const _ = require("lodash");

const iframePlayerRef = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframePlayerRef);

player.on(
  "timeupdate",
  _.throttle(function (data) {
    const { seconds } = data;
    localStorage.setItem("videoplayer-current-time", seconds);
  }, 1000)
);

window.addEventListener("load", () => {
  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
});
