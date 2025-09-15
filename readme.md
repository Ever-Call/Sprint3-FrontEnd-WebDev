## 👥 Integrantes

| Nome            | RM       |
|-----------------|----------|
| André Mateus Yoshimori | RM563310 |
| Eduardo Francisco Mauro Gonçalves | RM561969 |
| Ever Callisaya Amaru | RM563971 |
| Gabriel Luchetta dos Santos | RM561861 |
| Matheus Henrique Ferreira Camargo da Silva | RM566232 |

---

### 🔗 Deploy (GitHub Pages): [https://ever-call.github.io/Sprint3-FrontEnd-WebDev/#]

---

# ⚽ Passa a Bola
Passa a Bola é um canal digital criado em 2021 por Alê Xavier Luana Maluf para promover o futebol feminino

---

# APIs usados:
## API-FOOTBAL
URL Base: https://v3.football.api-sports.io \
URL com endpoint e parâmetros: https://v3.football.api-sports.io/standings?league=74&season=2023\
Endpoint: /standings\
Método HTTP: GET
### Autenticação:
A API requer a autenticação através de API Keys (chaves de API) incluídas nos cabeçalhos da requisição HTTP. A API KEY utilizada é "51dbb7d7a84baf534ad4eb057b227fcf".
### Cabeçalhos:
x-rapidapi-host: v3.football.api-sports.io\
x-rapidapi-key: 51dbb7d7a84baf534ad4eb057b227fcf
### Sobre o Endpoint "standings":
Este endpoint retorna a classificação de uma liga específica para uma temporada específica. É ideal para exibir a tabela de pontos do campeonato.\
O restante da URL "?league=74&season=2023", são parâmetros de consulta e são usados para filtrar ou especificar a requisição.
### Uso:
Os dados retornados pela api foram usados para uma exibir tabela do campeonato Brasileirão. Feminino A1 (2023)
## API simulado:
foi simulado fazer uma requisição de api com um arquivo json local que está na pasta "public", e ele retorna notícias sobre o futebol feminino, junto com suas fontes(url).