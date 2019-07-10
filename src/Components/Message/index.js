import React from 'react';

let Message = props => {
	let text = <p className="lead"> {props.msgText} </p>;
	if (props.msgUpdated) 
		text = (<div>
			   		<p className="lead">{props.msgText}</p>
			   		<div className="w-100" />
			   		<p className="lead">{props.msgUpdated}</p>
			   	</div>)

	return (
		<div className="jumbotron p-3 p-md-5 mt-3 text-white rounded bg-dark">
			<h1 className="display-4">{props.msgHeader}</h1>
			{text}
		</div>
		)
}

export default Message;