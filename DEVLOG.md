### Dia 1 (07/02/26) 
#### 13H - 17:30H
- Inicialização do projeto NEXT + REACT + TAILWIND
- Gerenciador de pacotes: pnpm
- Adiciona icones e imagens no projeto 
- Definição de cores em tailwind.config.ts
- Criação do header da Home
- Criação de componentes reutilizáveis de Layout, Main, Footer
- Estruturação da página Home

#### 17:50H - 22:00
- Implementação de uma função assíncrona responsável por realizar múltiplas requisições com base em um range definido de IDs
  - Consolidação e filtragem dos dados retornados em um único array
  - Solução adotada devido à ausência de um endpoint na SuperHero API para listagem de múltiplos heróis
- Criação da tipagem do personagem (TypeScript)
- Implementação dos favoritos na Home
  - Criação de um Estado para o filtro de nome/favoritos
- Criação do componente de personagem utilizado na Home
- Mudança na organização dos arquivos
- Componentização da Home em SearchBar, Favorites e CharactersList 
- Renderização dos personagens na Home
- Implementa animação quando passa o mouse sobre o card na Home
- tag Link do next utilizada no card dos personagens
- Criação de rota dinâmica que recebe ID do personagem atual
