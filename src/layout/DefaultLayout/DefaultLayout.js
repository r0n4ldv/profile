import React from 'react';

import {
	ProfileHeader,
	ProfileFooter
} from './components';

const DefaultLayout = props => {
	const { children } = props;

	return (
		<div className="container">
			<div className="header-container">
				<ProfileHeader />
			</div>
			<div className="body-container">
				{children}
			</div>
			<div className="footer-container">
				<ProfileFooter />
			</div>
		</div>
	);
};

export default DefaultLayout;