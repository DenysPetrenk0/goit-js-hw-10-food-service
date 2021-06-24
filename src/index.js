import menuData from './menu';
import createMarkup from './templates/markup.hbs';

const ulMenu = document.querySelector('.menu');
const btnThem = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',

  chahgeTheme() {
    body.classList.toggle(this.LIGHT);
    body.classList.toggle(this.DARK);
  },
};

function getBodyTheme() {
  const themeValue = localStorage.getItem('bodyTheme');
  if (JSON.parse(themeValue) === Theme.DARK) {
    defaultBodyTheme(Theme.DARK);
    btnThem.checked = true;
  }
}
getBodyTheme();

function defaultBodyTheme(theme) {
  body.classList.add(theme);
}

defaultBodyTheme(Theme.LIGHT);

ulMenu.innerHTML = createMarkup(menuData);

btnThem.addEventListener('change', event => {
  Theme.chahgeTheme();
  const classBody = body.getAttribute('class');
  localStorage.setItem('bodyTheme', JSON.stringify(classBody));
});
