export class ServeFile {
  constructor (file) {
    this.file = file;
  }

  renderView() {
    fetch(this.file)
      .then(response => response.text())
      .then(text => {
        document.querySelector('main').innerHTML = text;
      });
  }
}
