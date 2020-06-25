import React, { useState } from 'react';

import profileData from './data';

import {
	Details,
	Identification
} from './components';

const Home = props => {
	const [profile] = useState(profileData);

	return (
		<div className="profile-container">
			<div className="row">
				<div className="col-2 contact-details">
					{profile.map(pid => (
						<Identification
							avatar={pid.avatar}
							name={pid.name}
							position={pid.position}
						/>
					))}

				</div>
				<div className="col-10 full-info">
					<Details />
				</div>
			</div>

		</div>
	);
};

export default Home;