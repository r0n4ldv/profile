import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LayoutRouteHandler } from './components';
import { DefaultLayout } from './layout';

import { Home as HomeView } from './views';

const Routes = () => {
	return (
		<Switch>
			{/*<Redirect exact from="/" to="profile/home" />*/}
			<LayoutRouteHandler
				component={HomeView}
				layout={DefaultLayout}
				exact
				path="/home" />
		</Switch>
	);
};

export default Routes;