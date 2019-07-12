import React from 'react';

const ErrorMsg = props => {
	return (
		<div className="alert alert-danger mt-3" role="alert">
  			<h4>{props.errText}</h4>
		</div>
	)
} 

export default ErrorMsg;