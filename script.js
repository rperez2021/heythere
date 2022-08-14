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
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
`

  let styleSheet = document.createElement("style")
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

addStyles();
printOverlay();
printHello();