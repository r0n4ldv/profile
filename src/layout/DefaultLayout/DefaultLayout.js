import React from 'react';

import {
	ProfileHeader,
	ProfileBody,
	ProfileFooter
} from './components';

const DefaultLayout = props => {
	return (
		<div className="container">
			<ProfileHeader />
			<ProfileBody />
			<ProfileFooter />
		</div>
	);
};

export default DefaultLayout;