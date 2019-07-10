import React from 'react';
import Episode from './Episode';

const Podcast = props => {
	return (
		<div className="col-md-12">
			<div className="card flex-md-row mb-4 box-shadow h-md-250">
				<img 
					className="card-img-left img-thumbnail p-0 border-none flex-auto d-none d-md-block"
					style={{minWidth: "8.5vw", maxWidth: "25.6vw", height: "128px"}}
					src={props.podThumbnail} 
			  		alt={"broken!"}
			  		onError={props.imgBroken} />
			  	<Episode 
		  			date={props.podDate}
		  			title={props.podTitle} 
		  			media={props.podMedia} />
			</div>
		</div>
		)
}

export default Podcast;