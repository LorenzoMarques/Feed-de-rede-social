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
 - [Iniciando a aplicação](#Iniciando)  
<!--te-->

<br>

# Sobre

- Esta aplicação foi feita para um teste técnico, onde o usuário pode fazer posts para um feed de uma rede social.
  <br>
  
# Iniciando

- Primeiramente certifiquece que voce tem um banco de dados gerenciado pelo MySQL e o MySQL instalados na sua máquina
- Caso não tenha um banco de dados criado utilize um editor de SQL para criar um ou utilize os seguintes comandos no seu terminal:

### `mysql -u root -p`
### `create database nome_do_banco_de_dados;`

- Crie um arquivo .env na pasta back-end e preencha os dados seguindo o modelo do arquivo .env.example
- Utilize os seguintes comando em seu terminal:

### `php artisan migrate`
### `php artisan serve`

- Pronto, o servidor do seu banco de dados deve estar rodando localmente agora e deve aparecer a seguinte mensagem no seu console:
###  `INFO  Server running on [http://127.0.0.1:8000].
###
###  Press Ctrl+C to stop the server`

- Agora é só testar a aplicação.


# Integrantes

- <a href="https://github.com/LorenzoMarques">Lorenzo Marques.</a> <br>
  <br>

# Aplicação

url base da aplicação: http://127.0.0.1:8000/api/

# Rotas

# <p align="center">GET</p>

1.1 - Para listar os posts, utilize a a rota: <br>
`GET /posts?page=1 - formato de resposta - status 200`

```json
[
{
	"current_page": 1,
	"data": [
		{
			"id": 1,
			"username": "Jhon doe",
			"category": "post",
			"text": "A Radom text",
			"created_at": "2022-09-19T21:14:57.000000Z",
			"updated_at": "2022-09-19T21:14:57.000000Z"
		},
		{
			"id": 2,
			"username": "Mary Barry",
			"category": "post",
			"text": "A Radom text",
			"created_at": "2022-09-19T21:15:01.000000Z",
			"updated_at": "2022-09-19T21:15:01.000000Z"
		},
		{
			"id": 3,
			"username": "Felipe Terra",
			"category": "post",
			"text": "A Radom text",
			"created_at": "2022-09-19T21:15:05.000000Z",
			"updated_at": "2022-09-19T21:15:05.000000Z"
		},
		{
			"id": 4,
			"username": "Bruno Mendonça",
			"category": "post",
			"text": "A Radom text",
			"created_at": "2022-09-19T21:15:10.000000Z",
			"updated_at": "2022-09-19T21:15:10.000000Z"
		},
		{
			"id": 5,
			"username": "Julio da Mata",
			"category": "post",
			"text": "A Radom text",
			"created_at": "2022-09-19T21:15:14.000000Z",
			"updated_at": "2022-09-19T21:15:14.000000Z"
		},
		{
			"id": 6,
			"username": "Bernardo Rosa",
			"category": "post",
			"text": "A Radom text",
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

2.1 - Para criar um post, utilize a rota:<br>
`POST /posts - formato de requisição`

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
