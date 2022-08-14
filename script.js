// Print an Overlay in the DOM that says "Hey There"

const printOverlay = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = '<h1>Hey There</h1>';
  document.body.appendChild(overlay);
}

const printHello = () => {
  console.log('Hello');

}
const addStyles = () => {
  let styles = `
    .overlay {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 400px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .overlay h1 {
      color: white;
      font-size: 2em;
      text-align: center;
      margin-top: 50px;
    }
`

  let styleSheet = document.createElement("style")
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

addStyles();
printOverlay();
printHello();