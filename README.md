# Blogs API

## Descrição
Esta é uma API REST de um banco de dados que pode ser usado em um blog.

## Clonando o Respositório
Para clonar o repositório e iniciar o projeto, execute os seguintes passos:

1. Clone o repositório

2. Acesse o diretório do projeto:
   
4. Instale as dependências:
```bash
npm install
```

## Configurações do projeto
Para iniciar o projeto utilizando o Docker, siga as orientações abaixo:

1. Execute o comando para iniciar os serviços node e db utilizando o Docker Compose:
```bash
docker-compose up -d
```

- Para acessar o terminal interativo do container all_for_one, execute o comando:
```bash
docker exec -it blogs_api bash
```

## Habilidades desenvolvidas:
- nodeJS;
- express;
- JWT;
- CRUD;
- Crianção de migrações, modelos e rotas;
- Arquitetura MSC.

## Rotas para testar a aplicação:
DICA: Você pode utilizar a extensão Thunder Client para verificar as funcionalidades

### POST /login
Formato correto para o Body
```bash
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
### POST /user
Formato correto para o Body
```bash
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // image is not obrigatory
}
```
### GET /user
Deve retornar todos os usuários

### GET /user/:id
Deve retornar um usuário de acordo com o seu id

### POST /categories
Formato correto para o Body
```bash
{
  "name": "Typescript"
}
```

### GET /categories
Deve retornar todas as categorias

### POST /post
Formato correto para o Body
```bash
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

### GET /post
Deve retornar todos os posts

### GET /post/:id
Deve retornar o post de acordo com o id

### PUT /post/:id
Formato correto para o Body
```bash
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```
### DELETE /post/:id
Deve deletar um post de acordo com seu id

### GET /post/search?q=:searchTerm
Encontra uma pastagem de acordo com o termo pesquisado.

Exemplo:
```bash
// GET /post/search?q=Vamos que vamos

[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```

## Formas de contato:
Email: alinems4120@gmail.com <br>
Linkedin: <a href="https://www.linkedin.com/in/alinemourasantos-dev/" target="_blank">Clique aqui</a>
