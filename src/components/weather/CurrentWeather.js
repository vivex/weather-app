import React from 'react';
import { Grid } from '@material-ui/core';

const CurrentWeather = ({ temp = 0, description, city, iconId, loading }) => (
	<Grid item xl={6} alignContent="center" justify="center" className="main-content">
		{loading ? (
			<h2>Loading...</h2>
		) : (
			<div className="big-data">
				<i className={`wi wi-owm-${iconId} main-icon`} />
				<h2>
					{Math.round(temp)}
					&deg;
				</h2>
			</div>
		)}
		<h2 className="main-description">{description}</h2>
		<h1 className="main-city">{city}</h1>
	</Grid>
);

export default CurrentWeather;
