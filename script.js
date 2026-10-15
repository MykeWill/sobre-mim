const themeButton = document.querySelector('.botao-tema');
const themeStorageKey = 'sobre-mim-theme';
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function readSavedTheme() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch (error) {
    console.warn('Nao foi possivel ler o tema salvo.', error);
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch (error) {
    console.warn('Nao foi possivel salvar o tema escolhido.', error);
  }
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const actionLabel = `Ativar tema ${nextTheme === 'dark' ? 'escuro' : 'claro'}`;
  themeButton.setAttribute('aria-label', actionLabel);
  themeButton.setAttribute('title', actionLabel);
}

const savedTheme = readSavedTheme();
const initialTheme = savedTheme === 'light' || savedTheme === 'dark'
  ? savedTheme
  : systemPrefersDark ? 'dark' : 'light';

applyTheme(initialTheme);

themeButton.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});
