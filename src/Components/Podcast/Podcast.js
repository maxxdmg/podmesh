import React, {Component} from 'react';
import Episode from './Episode';

class Podcast extends Component {

	render (){
		return (
			<div className="col-md-12">
				<div className="card flex-md-row mb-4 box-shadow h-md-250">
					<img 
						className="card-img-left rounded-left p-0 border-none flex-auto d-none d-md-block"
						style={{minWidth: "8.5vw", maxWidth: "25.6vw", height: "128px"}}
						src={this.props.podThumbnail} 
				  		alt={"broken!"}
				  		onError={this.props.imgBroken} />
				  	<Episode 
			  			date={this.props.podDate}
			  			title={this.props.podTitle} 
			  			media={this.props.podMedia} />
				</div>
			</div>
		)
	}
}

export default Podcast;