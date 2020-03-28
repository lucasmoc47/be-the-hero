import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'

export default function Routes() {
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Login} />
		</Switch>
	</BrowserRouter>
}