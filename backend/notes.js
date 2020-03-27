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


 /**
  * Entidades (tudo o que vai ficar salvo no banco de dados):
  * 	- ONG
  * 	- Incident
  *
  */

  /**
   * Funcionalidades (coisas que a aplicação precisa fazer):
   * 	- Login de ONG
   * 	- Logout de ONG
   * 	- Cadastro de ONG
   * 	- Cadastrar novo Caso
   * 	- Deletar novo Caso
   * 	- Listar Casos específicos de uma ONG
   * 	- Entrar em contato com a ONG
   */