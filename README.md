<h1 align="center">The Contact Book</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ManuCoutinho/the-contact-book?color=FACC88&style=for-the-badge">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/ManuCoutinho/the-contact-book?color=FACC88&style=for-the-badge">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ManuCoutinho/the-contact-book?color=FACC88&style=for-the-badge">
  <img alt="License" src="https://img.shields.io/github/license/ManuCoutinho/the-contact-book?color=FACC88&style=for-the-badge">

</p>

## :yarn: Sobre

Este projeto é uma simples API para cadastro de contatos, feita em Javascript (Node) utilizando Express.js e Postgres como banco de dados, qual conta com CRUD completo.

Utilizando o Docker, o banco de dados pode ser montado localmente sob a interface do PGAdmin4 e a imagem com a tag `latest` do Postgres.

A API atualmente contém as seguintes rotas:

```bash
# CRIA UMA NOVA CATERGORIA DE CONTATOS
POST /categories
#payload
{
  "name": "string"
}

# LISTA TODAS AS CATEGORIAS REGISTRADAS
GET /categories

# CRIA UM NOVO CONTATO
POST /contacts
#payload
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "category_id": "string",
}

# LISTA TODOS OS CONTATOS CADASTRADOS
 GET /contacts

# LISTA UM CONTATO PELO ID
 GET /contacts/:id

# DELETA UM CONTATO
DELETE /contacts/:id

# EDITA UM CONTATO
PUT /contacts/:id
#payload
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "category_id": "string",
}

```

\_Veja mais detalhes no arquivo [api.http](api.http)

## :white_check_mark: Requerimentos

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) versão LTS instalados no seu ambiente de desenvolvimento.
Para utilização da API recomenda-se a utilização das ferramentas [Docker](https://www.docker.comm) e [docker compose](https://docs.docker.com/compose/).

O passo-a-passo a seguir considerará que você está utilizando as ferramentas acima recomendadas.
Outra alternativa recomendada é a utilização da ferramenta _Dev Containers_ do Vscode, por meio da opção "docker-compose".

Para que a API funcione plenamente são necessárias as variáveis de ambiente descritas no arquivo `.env.example`.

Caso necessite, poderá manipular o bando de dados por meio da inteface do Pgadmin.

## :checkered_flag: Começando

```bash
# Clone este projeto
$ git clone https://github.com/ManuCoutinho/the-contact-book.git

# Acesse a pasta
$ cd the-contact-book

# Inicie o projeto com docker compose
# Este comando irá baixar as imagens do node, postgres e pgadmin4, instalar as dependencias necessárias e iniciar o Prisma com a tabela Mensseger
$ docker compose up -d

# Neste ponto o servidor de desenvolvimento estará rodando em <http://localhost:3333>

# Prontinho, seu front-end pode ser conectado
```

<a href="#top">⬆️</a>
