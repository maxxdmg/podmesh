import React from 'react';

const Podcast = props => {
	return (
		<div className="container row pr-0" style={{width:"50vw", height:"12vw"}}>
			<div className="col-sm-3 pr-0">
				<img 
					style={{width: "100%"}}
		  			src={props.podThumbnail} 
		  			alt={"broken!"}
		  			onError={props.imgBroken} />
			</div>
			<div className="card col-sm-9 p-0 border-0 rounded-0" >
					<div className="card-body pt-0">
						<div className="row">
							<div className="col-sm-7">
								<p>{props.podCreator}</p>
							</div>
							<div className="col-sm-2" />
							<div className="col-sm-3">
			    				<p className="card-text" style={{textAlign: "right"}}>{props.podDate}</p>
							</div>
						</div>

	    			<p className="card-title">{props.podTitle}</p>
	    		
	    			<audio 
	    				className="w-100"
	    				controls
	    				src={props.podMedia} />
			  		</div>
			</div>
		</div>
		)
}

export default Podcast;