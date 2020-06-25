import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LayoutRouteHandler } from './components';
import { DefaultLayout } from './layout';

import { Home as HomeView } from './views';

const Routes = () => {
	return (
		<Switch>
			{/*<Redirect exact from="profile/" to="profile/home" />*/}
			<LayoutRouteHandler
				commponent={HomeView}
				layout={DefaultLayout}
				exact
				path="/" />
		</Switch>
	);
};

export default Routes;