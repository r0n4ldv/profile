import React from 'react';

const FullPageLayout = props => {
	const { children } = props;

	return (
		<div className="container">
			{children}
		</div>
	);
};

export default FullPageLayout;