const themeButton = document.querySelector('.botao-tema');
const themeStorageKey = 'sobre-mim-theme';
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const projectsContainer = document.querySelector('#lista-projetos');
const languageColors = {
  'C': '#555555',
  'C#': '#178600',
  'C++': '#f34b7d',
  'CSS': '#663399',
  'Dart': '#00B4AB',
  'Go': '#00ADD8',
  'Groovy': '#e69f56',
  'HTML': '#e34c26',
  'Java': '#b07219',
  'JavaScript': '#f1e05a',
  'Jupyter Notebook': '#DA5B0B',
  'Kotlin': '#A97BFF',
  'PHP': '#4F5D95',
  'Python': '#3572A5',
  'Ruby': '#701516',
  'Rust': '#dea584',
  'Shell': '#89e051',
  'Swift': '#F05138',
  'TypeScript': '#3178c6',
  'Vue': '#41b883',
};

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

function createProjectCard(repository) {
  const card = document.createElement('a');
  card.className = 'projeto-card';
  card.href = repository.html_url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  const header = document.createElement('div');
  header.className = 'projeto-cabecalho';

  const name = document.createElement('span');
  name.className = 'projeto-nome';
  name.textContent = repository.name;
  header.append(name);

  const stars = document.createElement('span');
  stars.className = 'projeto-estrelas';
  stars.setAttribute('aria-label', `${repository.stargazers_count} estrelas`);
  const starIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  starIcon.setAttribute('viewBox', '0 0 16 16');
  starIcon.setAttribute('aria-hidden', 'true');
  const starPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  starPath.setAttribute('d', 'M8 0.25l2.47 5.01 5.53.8-4 3.9.94 5.51L8 12.87l-4.94 2.6L4 9.96 0 6.06l5.53-.8L8 .25z');
  starIcon.append(starPath);
  const starCount = document.createElement('span');
  starCount.textContent = new Intl.NumberFormat('pt-BR').format(repository.stargazers_count);
  stars.append(starIcon, starCount);
  header.append(stars);

  const description = document.createElement('span');
  description.className = 'projeto-descricao';
  description.textContent = repository.description || 'Sem descrição por aqui 👀';

  const language = document.createElement('span');
  language.className = 'projeto-linguagem';
  const languageDot = document.createElement('span');
  languageDot.className = 'linguagem-bolinha';
  languageDot.setAttribute('aria-hidden', 'true');
  if (repository.language && languageColors[repository.language]) {
    languageDot.style.backgroundColor = languageColors[repository.language];
  }
  const languageName = document.createElement('span');
  languageName.textContent = repository.language || 'Sem linguagem';
  language.append(languageDot, languageName);

  card.append(header, description, language);
  return card;
}

async function loadProjects() {
  try {
    const response = await fetch('https://api.github.com/users/MykeWill/repos?sort=updated&per_page=6');
    if (!response.ok) {
      throw new Error(`GitHub API respondeu com status ${response.status}.`);
    }

    const repositories = await response.json();
    if (!Array.isArray(repositories)) {
      throw new Error('A resposta da API do GitHub nao esta no formato esperado.');
    }

    const originalRepositories = repositories.filter((repository) => !repository.fork);
    projectsContainer.replaceChildren();
    if (originalRepositories.length === 0) {
      const emptyState = document.createElement('p');
      emptyState.className = 'estado-projetos';
      emptyState.textContent = 'Nenhum projeto para mostrar por enquanto.';
      projectsContainer.append(emptyState);
      return;
    }

    originalRepositories.forEach((repository) => {
      projectsContainer.append(createProjectCard(repository));
    });
  } catch (error) {
    console.error('Nao foi possivel carregar os projetos do GitHub.', error);
    const errorState = document.createElement('p');
    errorState.className = 'estado-projetos';
    errorState.textContent = 'Nao foi possivel carregar os projetos agora. Tente novamente mais tarde.';
    projectsContainer.replaceChildren(errorState);
  } finally {
    projectsContainer.setAttribute('aria-busy', 'false');
  }
}

loadProjects();
