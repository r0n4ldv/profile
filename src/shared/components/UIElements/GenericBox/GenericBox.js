import React from 'react';

const GenericBox = props => {
	const { children, title, misc } = props;

	return (
		<div className="generic-box">
			<div className="box-header">
				<div className="box-title float-left">
					{title}
				</div>
				<div className="misc float-right">
					{misc}
				</div>
			</div>
			<div className="divider" />
			<div className="box-content">
				{children}
			</div>
		</div>
	);
};

export default GenericBox;
