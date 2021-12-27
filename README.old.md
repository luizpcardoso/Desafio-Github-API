# Desafio para vaga de FrontEnd

Primeiramente, obrigado pelo seu interesse em conosco,
A seguir você encontrará todos as informações necessárias para fazer seu teste.

## Stack do projeto

Você pode utilizar a stack que preferir, JQuery, Angular ou React.

## Objetivo do desafio

O objetivo é construir um sistema de consulta por usuário do github e mostrando suas informações.

## Fluxo das telas

Na Pagina principal teremos um header com um campo de busca, apos o usuario digitar e buscar, deve ser preenchido com o resultado da busca e uma listagem com os usuários, no card do usuário tera um botão de ver mais, apos clicar devera abrir um modal com algumas infos do usuário.

## Modelo de Layout

Você devera seguir o layout do link: https://www.figma.com/file/bAxYmnMBHqmHL9SY6YfDmG/Internship-Test?node-id=14%3A4009

## Enpoints e documentação

### Pesquisa
Documentação Pesquisa: https://developer.github.com/v3/search/#search-users

--Endpoint Exemplo: curl https://api.github.com/search/users?q=stolato
--METHOD: GET

Retorno:
```{
  "total_count": 1,
  "incomplete_results": false,
  "items": [
    {
      "login": "stolato",
      "id": 1437461,
      "node_id": "MDQ6VXNlcjE0Mzc0NjE=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/1437461?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/stolato",
      "html_url": "https://github.com/stolato",
      "followers_url": "https://api.github.com/users/stolato/followers",
      "following_url": "https://api.github.com/users/stolato/following{/other_user}",
      "gists_url": "https://api.github.com/users/stolato/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/stolato/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/stolato/subscriptions",
      "organizations_url": "https://api.github.com/users/stolato/orgs",
      "repos_url": "https://api.github.com/users/stolato/repos",
      "events_url": "https://api.github.com/users/stolato/events{/privacy}",
      "received_events_url": "https://api.github.com/users/stolato/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ]
}
```

### Dados modal

Para fazer a consulta dos dados de um usuario basta pegar o item que usuario selecionou e nos dados recebidos pela pesquisa tera um item no objeto com o nome de url faça uma requisição neste enpoint.

--Endpoint Exemplo: curl https://api.github.com/users/stolato
--MEHTOD: GET

Retorno: 
```
{
  "login": "stolato",
  "id": 1437461,
  "node_id": "MDQ6VXNlcjE0Mzc0NjE=",
  "avatar_url": "https://avatars3.githubusercontent.com/u/1437461?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/stolato",
  "html_url": "https://github.com/stolato",
  "followers_url": "https://api.github.com/users/stolato/followers",
  "following_url": "https://api.github.com/users/stolato/following{/other_user}",
  "gists_url": "https://api.github.com/users/stolato/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/stolato/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/stolato/subscriptions",
  "organizations_url": "https://api.github.com/users/stolato/orgs",
  "repos_url": "https://api.github.com/users/stolato/repos",
  "events_url": "https://api.github.com/users/stolato/events{/privacy}",
  "received_events_url": "https://api.github.com/users/stolato/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Luiz Carlos Rosestolato Junior",
  "company": null,
  "blog": "stolato.com.br",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2012-02-14T18:02:59Z",
  "updated_at": "2020-06-18T05:00:10Z"
}
```

## Diferenciais

- Melhoria no estilo da aplicação
- Organização do código

## Como submeter?

- Commite suas alterações de forma organizada
- Você deve criar um fork deste repositorio desafio, ao terminar todo o desafio você devera abrir um "Pull Request" deste Fork.