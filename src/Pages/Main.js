import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminIndex from './AdminIndex';
import Login from './Login';

function Main() {
	return (
		<Router>
			<Route path='/login/' exact component={Login} />
			<Route path='/index/' exact component={AdminIndex}  />
		</Router>
	);
}

export default Main;
