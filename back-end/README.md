<h1 align="center">test-laravel</h1>

# Tabela de conteúdo

<!--ts-->
 - [Sobre](#Sobre)
 - [Integrantes](#Integrantes)
 - [Aplicação](#Aplicação)
 - [Rotas](#Rotas)
    - [GET](#GET)
    - [POST](#POST)
 - [Tecnologias](#Tecnologias)  
<!--te-->

<br>

# Sobre

- Esta aplicação foi feita para um teste técnico, onde o usuário pode fazer posts para um feed de uma rede social.
  <br>

# Integrantes

- <a href="https://github.com/LorenzoMarques">Lorenzo Marques.</a> <br>
  <br>

# Aplicação

url base da aplicação no heroku: http://127.0.0.1:8000/api/

# Rotas

# <p align="center">GET</p>

1.1 - Para listar os posts, utilize a a rota: <br>
`GET /posts?page=1 - formato de resposta - status 200`

```json
[
{
	"current_page": 2,
	"data": [
		{
			"id": 11,
			"username": "11",
			"category": "11",
			"text": "11",
			"created_at": "2022-09-19T21:14:57.000000Z",
			"updated_at": "2022-09-19T21:14:57.000000Z"
		},
		{
			"id": 12,
			"username": "12",
			"category": "12",
			"text": "12",
			"created_at": "2022-09-19T21:15:01.000000Z",
			"updated_at": "2022-09-19T21:15:01.000000Z"
		},
		{
			"id": 13,
			"username": "13",
			"category": "13",
			"text": "14",
			"created_at": "2022-09-19T21:15:05.000000Z",
			"updated_at": "2022-09-19T21:15:05.000000Z"
		},
		{
			"id": 14,
			"username": "14",
			"category": "14",
			"text": "14",
			"created_at": "2022-09-19T21:15:10.000000Z",
			"updated_at": "2022-09-19T21:15:10.000000Z"
		},
		{
			"id": 15,
			"username": "15",
			"category": "15",
			"text": "15",
			"created_at": "2022-09-19T21:15:14.000000Z",
			"updated_at": "2022-09-19T21:15:14.000000Z"
		},
		{
			"id": 16,
			"username": "16",
			"category": "16",
			"text": "16",
			"created_at": "2022-09-19T21:15:18.000000Z",
			"updated_at": "2022-09-19T21:15:18.000000Z"
		}
	],
	"first_page_url": "http:\/\/127.0.0.1:8000\/api\/posts?page=1",
	"from": 11,
	"last_page": 2,
	"last_page_url": "http:\/\/127.0.0.1:8000\/api\/posts?page=2",
	"links": [
		{
			"url": "http:\/\/127.0.0.1:8000\/api\/posts?page=1",
			"label": "&laquo; Previous",
			"active": false
		},
		{
			"url": "http:\/\/127.0.0.1:8000\/api\/posts?page=1",
			"label": "1",
			"active": false
		},
		{
			"url": "http:\/\/127.0.0.1:8000\/api\/posts?page=2",
			"label": "2",
			"active": true
		},
		{
			"url": null,
			"label": "Next &raquo;",
			"active": false
		}
	],
	"next_page_url": null,
	"path": "http:\/\/127.0.0.1:8000\/api\/posts",
	"per_page": 10,
	"prev_page_url": "http:\/\/127.0.0.1:8000\/api\/posts?page=1",
	"to": 16,
	"total": 16
}
,
]
```

# <p align="center">POST</p>

2.1 - Para criar uma conta de usuario, utilize a rota:<br>
`POST /users - formato de requisição`

```json
{	
	"username": "Jhon doe",
	"category": "post",
	"text": "A Random text"
}
```



# Tecnologias

- <a href="https://www.php.net/">PHP</a>
- <a href="https://laravel.com/">Laravel</a>
