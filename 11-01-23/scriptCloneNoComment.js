function passGenerator() {
  const passText = document.createElement('h1');

  if (nPassGenerated >= 5) {
    console.log('Attenzione, hai superato il limite massimo!');
    btnClickEl.removeEventListener('click', passGenerator);
  }

  document.querySelector('.big-text')?.remove();
  passText.className = 'big-text';
  passText.textContent = Math.random().toString(36).slice(2, 10);
  nPassGenerated++;

  return document.body.appendChild(passText);
}

function changeDocumentBg() {
  document.body.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

function keyPressed(event) {
  const keyText = document.createElement('h1');

  document.querySelector('.big-text')?.remove();
  keyText.className = 'big-text';
  keyText.textContent = event.key;
  document.body.appendChild(keyText);
}

let nPassGenerated = 0;
const btnClickEl = document.querySelector('.btn');

btnClickEl.addEventListener('click', passGenerator);

document.addEventListener('keydown', (event) => keyPressed(event), {
  once: true
});
