import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LayoutRouteHandler } from './components';
import {
	DefaultLayout,
	FullPageLayout
} from './layout';

import {
	Home as HomeView,
	Welcome as WelcomeView
} from './views';

const Routes = () => {
	return (
		<Switch>
			{/*<LayoutRouteHandler*/}
			{/*	component={WelcomeView}*/}
			{/*	layout={FullPageLayout}*/}
			{/*	exact*/}
			{/*	path="" />*/}
			<LayoutRouteHandler
				component={HomeView}
				layout={DefaultLayout}
				exact
				path="" />
		</Switch>
	);
};

export default Routes;