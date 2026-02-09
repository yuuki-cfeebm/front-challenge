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

### Dia 2 (08/02/26)
- Ajuste no Link da rota dinâmica
- Implementação do Header da um personagem específico
- Criação da estrutura da página de um personagem específico
- Criação de outra função para retornar apenas as informações do heroi do ID especificado
- Criação de componentes da página de personagem específico
- Renderização das informações de um personagem
- Criação do componente de quadrinhos do personagem
- Move funções de personagens para lib/characters
- Criação de um context para armazenar personagens salvos
- Implementação de filtro de ordem alfabética e favoritos com limitação de 5
- Adiciona os favoritos no localStorage para permanecer após o carregamento da página
- Implementação de favorito quando entra em um personagem específico
- Implementação do filtro por barra de pesquisa na home
- Criação de um context para pesquisa 

### Dia 3 (09/02/26)
- Implementa Responsividade
- Implementação da pesquisa na página de personagem único
- Filtro de pesquisa na página de personagem único tem visualização de até 5 personagens