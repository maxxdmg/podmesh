import React from 'react';

const Err = props => {
	return (
		<div className="jumbotron p-3 p-md-5 mt-3 text-white rounded bg-dark">
			<h1 className="display-4">No podcast feed loaded</h1>
			<p className="lead">
				Enter the rss url of a podcast to view and listen to it's feed 
			</p>
		</div>
		)
} 

export default Err;