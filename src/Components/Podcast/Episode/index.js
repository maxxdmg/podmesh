import React from 'react';

let Episode = props => {
	return (
		<div className="card-body shadow-sm bg-dark rounded-right
		d-flex flex-column align-items-start text-white">
			<strong 
				className="mb-0">
				{props.title}
			</strong>
			<div 
				className="mb-0">
				{props.date}
			</div>
			<audio 
				className="w-100"
				controls
				src={props.media} />
		</div>
		)
}

export default Episode;