const express = require('express')

const app = express()

app.use(express.json())

/**
 * Métodos HTTP:
 * 
 * GET: acessar e listar informações do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: excluir uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: 
 * 	- parâmetros nomeados na rota após o símbolo "?"
 * 	- geralmente são usados para filtros e paginação
 * 	- URL/route?page=2&name=Lucas
 * 
 * Route params: 
 * 	- parâmetros usados para identificar recursos
 * 	- URL/route/:varname
 * 
 * Request body: 
 * 	- corpo da requisição
 * 	- usado para criar ou alterar recursos do back-end
 */

/**
 * Bancos de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Formas de uso do SQL:
 * 	- Driver: SELECT * from users
 * 	- Query Builder(Knex): table('users').select('*')...
 */

app.post('/users', (req, res) => {
	const body = req.body

	return res.send(body)
})

app.get('/users', (req, res) => {
	const params = req.params

	return res.send(params)
})

app.listen(3333)