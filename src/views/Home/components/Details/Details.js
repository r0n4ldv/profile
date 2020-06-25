import React from 'react';

import { GenericBox } from '../../../../shared/components/UIElements';

const Details = props => {
	return (
		<React.Fragment>
			<GenericBox title="Summary" />
			<GenericBox title="Experience" />
		</React.Fragment>
	);
};

export default  Details;