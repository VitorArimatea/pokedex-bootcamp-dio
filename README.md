# Pokedex

## Requisição HTTP

URL: https://pokeapi.co/api/v2/pokemon
${IP: endereço}/${path: caminho de identificação do recurso}

IP: https://pokeapi.co
    http://127.0.0.1:8080

path: /api/v2/pokemon

## Request method

GET: Buscar pokémon | POST: Inserir novo pokémon | PUT: Atualizar pokémon | DELETE: Deletar pokémon

## Query String

Example
https://pokeapi.co/api/v2/pokemon?type=grass&name=i

https://pokeapi.co/api/v2/pokemon?offset=0&limit=2

## Request Headers
Configuração
Authorization: Basic, Bearer...
content-type: application/json
 
## Response Headers
Configuração

Body {
    name: "Bulbasaur"
}

## Status Code
200-299 = Success
300-399 = Redirect
400-499 = Erro por parte do cliente
500 Internal Server Error