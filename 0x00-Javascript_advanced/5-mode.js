// 5-mode

function changeMode(size, weight, transform, background, color) {
  const newStyle = `* {
    font-size: ${size};
    font-weight: ${weight};
    text-transform: ${transform};
    background-color: ${background};
    color: ${color};
  }
  `;
  if (document.getElementById('modeStyles')) {
    document.getElementById('modeStyles').innerHTML = newStyle;
  } else {
    const Styles = document.createElement('STYLE');
    Styles.id = 'modeStyles';
    Styles.innerHTML = newStyle;
    document.body.appendChild(Styles);
  }
}

function main() {
  const spooky = () => changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = () => changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = () =>
    changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const WelcomeHolberton = document.createElement('P');
  WelcomeHolberton.innerText = 'Welcom Holberton!';

  // Spooky
  const BtnSpooky = document.createElement('BUTTON');
  BtnSpooky.innerText = 'Spooky';
  BtnSpooky.addEventListener('click', spooky);

  // Dark mode
  const BtnDark = document.createElement('BUTTON');
  BtnDark.innerText = 'Dark mode';
  BtnDark.addEventListener('click', darkMode);

  // Dark mode
  const BtnScream = document.createElement('BUTTON');
  BtnScream.innerText = 'Scream mode';
  BtnScream.addEventListener('click', screamMode);

  document.body.appendChild(WelcomeHolberton);
  document.body.appendChild(BtnSpooky);
  document.body.appendChild(BtnDark);
  document.body.appendChild(BtnScream);
}

main();
