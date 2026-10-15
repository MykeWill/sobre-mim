# Sobre Mim

Registro da construcao desta pagina pessoal por meio de prompts: cada etapa documenta o objetivo, o pedido e o resultado incorporado ao projeto.

## Sumario

- [1. Criacao inicial](#1-criacao-inicial)
- [2. Ajuste visual](#2-ajuste-visual)
- [3. Tema claro e escuro](#3-tema-claro-e-escuro)
- [4. Projetos do GitHub](#4-projetos-do-github)
- [5. Favicon e animacoes](#5-favicon-e-animacoes)
- [6. Documentacao dos prompts](#6-documentacao-dos-prompts)
- [Commits do projeto](#commits-do-projeto)
- [Como rodar localmente](#como-rodar-localmente)

## 1. Criacao inicial

**Objetivo:** Criar a pagina pessoal inicial com apresentacao, biografia, tecnologias de interesse e um link para o GitHub.

**Prompt:**

```text
Crie o index.html e o style.css para uma pagina pessoal com meu nome, uma frase de apresentacao, uma secao Sobre, uma lista de tecnologias que quero aprender e um link para o meu GitHub.
```

> O texto acima foi organizado a partir do resumo do prompt inicial fornecido para este documento.

**Resultado gerado:** Estrutura semantica em `index.html` e estilos responsivos em `style.css`, formando o cartao de apresentacao original.

## 2. Ajuste visual

**Objetivo:** Refinar a tipografia, as cores, o espacamento e os estados de hover da pagina.

**Prompt:**

```text
agora ajusta o visual, so mexe no css

importa uma fonte do google fonts, Inter pro corpo e JetBrains Mono pro h1
troca a cor de destaque pra um violeta mais suave, fundo do card um pouco menos escuro
aumenta o espacamento entre as secoes
deixa o h1 maior e com um espacamento leve entre as letras
poe um hover legal no card inteiro, tipo uma elevacao de leve
line-height do paragrafo Sobre em 1.7
deixa os chips da lista com um hover mais vivo
```

**Resultado gerado:** `style.css` passou a usar Inter e JetBrains Mono, destaque violeta, espacamento maior entre secoes, hover de elevacao no cartao e hover mais vivo nos chips. O paragrafo Sobre recebeu `line-height: 1.7`.

## 3. Tema claro e escuro

**Objetivo:** Permitir alternar entre temas, persistir a escolha e usar a preferencia do sistema na primeira visita.

**Prompt:**

```text
quero um botao pra alternar entre tema claro e escuro

regras:
botao no canto superior direito do card, redondo e discreto
quando clicar, muda a pagina toda (fundo, texto, chips, botao do github, tudo)
salva a escolha no localStorage pra continuar quando recarregar
na primeira visita, respeita a preferencia do sistema operacional (prefers-color-scheme)
o icone muda: lua no tema escuro, sol no tema claro

aproveita as variaveis css que ja tem no :root e cria um data-theme="light" no body que sobrescreve os valores

cria um script.js separado e linka no final do body
```

**Resultado gerado:** Botao de tema com icones de sol e lua, paletas baseadas em propriedades customizadas CSS, leitura e gravacao da escolha no `localStorage` e deteccao da preferencia inicial por `prefers-color-scheme`. A logica foi separada em `script.js`.

## 4. Projetos do GitHub

**Objetivo:** Exibir repositorios publicos originais em cards, usando a API do GitHub.

**Prompt:**

```text
adiciona uma secao "Projetos" na pagina, entre a lista de tecnologias e o link do github

regras:
puxa os repositorios publicos da minha conta via API do github:
https://api.github.com/users/MykeWill/repos?sort=updated&per_page=6
mostra em cards: nome do repo, descricao, linguagem principal com uma bolinha colorida igual o github faz, e numero de estrelas
cada card eh um link que abre o repo em nova aba
ignora forks, so mostra os originais
se nao tiver descricao, mostra um texto tipo "Sem descricao por aqui 👀"
enquanto carrega, mostra "Carregando projetos..."
se der erro, mostra uma mensagem amigavel
os cards tem que respeitar o tema claro/escuro
no mobile fica um embaixo do outro, no desktop dois por linha

faz um mapa de cores pras linguagens mais comuns (javascript, typescript, python, html, css, java, dart etc) pra bolinha ficar realista
```

**Resultado gerado:** Secao responsiva de projetos e carregamento via API no `script.js`, com filtragem de forks, links em nova aba, descricao alternativa, cores por linguagem e estados de carregamento, erro e lista vazia. Os cards acompanham os temas claro e escuro.

## 5. Favicon e animacoes

**Objetivo:** Completar a pagina com favicon proprio, animacoes de entrada acessiveis e um botao interativo de surpresa.

**Prompt:**

```text
fecha a pagina com tres coisas:

1. favicon em emoji de raio ⚡, embutido como svg inline no head, sem arquivo externo

2. animacao suave de entrada quando carrega a pagina:
o card inteiro aparece com fade-in e slide-up
as secoes entram em cascata, uma depois da outra com um delay pequeno
respeita prefers-reduced-motion pra quem tem reducao de movimento no sistema

3. botao surpresa 🎉:
poe um segundo botao no canto superior esquerdo, espelhando o botao de tema
quando clicar, dispara uma animacao divertida nos chips da lista de tecnologias e nos cards de projeto
a animacao dura mais ou menos 1.2s e depois some
se der, joga uns emojis caindo do botao tipo confete

nada de biblioteca externa, so html css e js puro
```

**Resultado gerado:** Favicon SVG de raio embutido no HTML, animacoes de entrada em cascata e um botao surpresa que anima chips e projetos e solta confetes em emoji. As animacoes sao desativadas quando o sistema indica `prefers-reduced-motion`.

## 6. Documentacao dos prompts

**Objetivo:** Documentar o processo de construcao da pagina para que visitantes do repositorio entendam a sequencia de prompts, resultados e como executar o projeto.

**Prompt:**

```text
cria um PROMPTS.md na raiz do projeto documentando todos os prompts que eu te enviei pra construir essa pagina

formata assim:
cabecalho com nome do projeto e uma descricao breve
sumario navegavel com link pra cada prompt
cada prompt numa secao propria, com: numero, titulo, o objetivo, o prompt em si num bloco de codigo, e o resultado gerado
no final uma tabela resumo com todos os commits do projeto
uma secao de como rodar localmente com os comandos basicos

a ideia eh que quem abrir o repositorio entenda como a pagina foi feita atraves de prompts

os prompts que usei foram:
1. criacao inicial do index.html e style.css com nome, frase, secao sobre, lista de tecnologias e link do github
2. ajuste visual: fonte Inter + JetBrains Mono, paleta violeta, hover, variaveis css
3. tema claro/escuro com botao, localStorage e prefers-color-scheme
4. secao de projetos consumindo a API publica do github com cards
5. favicon emoji, animacao de entrada e botao surpresa 🎉
6. esse proprio prompt aqui pra gerar o PROMPTS.md
```

**Resultado gerado:** Este arquivo, com sumario navegavel, objetivos, prompts, resultados, historico de commits conhecido e instrucoes para executar a pagina localmente.

## Commits do projeto

| Commit | Resumo |
|---|---|
| `f2d0499` | `feat: criar pagina pessoal com HTML e CSS` |
| `89f1397` | `style: ajustar cores, fontes e espacamentos` |
| `c7ca5d7` | `feat: adicionar alternancia de tema claro/escuro` |
| `1cdf556` | `feat: adicionar secao de projetos com API do GitHub` |
| `e1e8951` | `chore: adicionar favicon e animacao de entrada` |

## Como rodar localmente

O projeto e estatico e nao requer instalacao de dependencias. Na raiz do repositorio, inicie um servidor local:

```bash
python -m http.server 8000
```

No Windows, tambem e possivel usar o launcher `py`:

```powershell
py -m http.server 8000
```

Abra <http://localhost:8000> no navegador. A secao de projetos precisa de conexao com a internet para consultar a API publica do GitHub.
