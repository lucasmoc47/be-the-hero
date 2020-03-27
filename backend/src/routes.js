const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) => {
	const body = req.body

	return res.send(body)
})

module.exports = routes