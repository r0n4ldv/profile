import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRouteHandler = props => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={matchProps => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default LayoutRouteHandler;
