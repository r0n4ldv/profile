import React from 'react';

const Identification = props => {
	const { name, avatar, position } = props;

	return(
		<React.Fragment>
			<div className="avatar"><img className="rounded-circle mx-auto d-block" src={avatar} /></div>
			<div className="name" align="center">{name}</div>
			<div className="position" align="center">
				<small>{position}</small>
			</div>
		</React.Fragment>
	);
};

export default Identification;