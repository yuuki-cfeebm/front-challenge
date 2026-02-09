# Frontend Challenge
Aplicação Web desenvolvida com Next.js e React para listagem e visualização de personagens. A aplicação consome dados de um API externa, permitindo busca por nome, ordenção alfabética, paginação, e gerenciamento de personagens favoritos.

## Tecnologias

- Next.js 14 (app Routeer)
- React 18
- Typescript
- TailWind CSS
- pnpm
- React Context API
- React Hooks
- Fetch API
- SuperHero API

### Home
<img width="1903" height="944" alt="image" src="https://github.com/user-attachments/assets/f694aa02-b6b5-4c2a-aee7-56ab48016deb" />

### Filtro de pesquisa por nome
<img width="1904" height="931" alt="image-2" src="https://github.com/user-attachments/assets/0d9dab79-08dd-4841-8bdd-5ac076825508" />

### Filtro de Favoritos
<img width="1901" height="931" alt="image-1" src="https://github.com/user-attachments/assets/fd6c167d-1c5a-4632-a6d8-496756b98a7f" />

### Visualização da página de personagem
<img width="1903" height="941" alt="image-3" src="https://github.com/user-attachments/assets/280cba9e-58e2-4bd3-b8e6-4f922f22508a" />

## Funcionalidades

- Listagem de personagens consumindo a SuperHeroAPI https://www.superheroapi.com/
- Renderização dinâmica dos dados dos personagens
- Filtro de busca a partir do nome
- Adicionar e remover personagens dos favoritos com limite de 5
- Filtro de ordem alfabética e favoritos
- Persistência dos favoritos usando localStorage
- Paginação dos personagens (20 por página)
- Navegação utilizando Next.js App Router
- Componentes reutilizáveis

# Instalação
### Pré-requisitos
- Node.js >= v18+
- pnpm

### Passo a passo
- git clone https://github.com/yuuki-cfeebm/front-challenge.git
- cd front-challenge
- pnpm install
- Crie um arquivo na raiz do projeto .env.local com SUPERHERO_API_URL=https://www.superheroapi.com/api.php/SUA_API_KEY
- executar pnpm dev
- acessar http://localhost:3000





