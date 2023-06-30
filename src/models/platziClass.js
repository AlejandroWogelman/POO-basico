export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

function videoPlay(id) {
  const urlSecreta = `https://platzi.urlsecreta/${id}`;
  console.log(`Se está reproduciendo desde la url: ${urlSecreta}`);
}
function videoStop(id) {
  const urlSecreta = `https://platzi.urlsecreta/${id}`;
  console.log(`Pausamos la url: ${urlSecreta}`);
}
