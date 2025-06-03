window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
   "letterbox": "fullscreen",
   "allowFullscreen": true,
   "fontSources": ["static/game/assets/fonts.swf"],
   "defaultFonts":{
    sans: ["Arial"]
   }
};

function FSfunction() {
    document.querySelector("ruffle-embed, ruffle-object, ruffle-player").enterFullscreen();
}