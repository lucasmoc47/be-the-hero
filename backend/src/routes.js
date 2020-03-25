const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) => {
	const body = req.body

	return res.send(body)
})

routes.get('/users', (req, res) => {
	const params = req.params

	return res.send(params)
})

module.exports = routes