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





