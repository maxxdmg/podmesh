import React from 'react';
import ControlPanel from '../ControlPanel';

const Navbar = props => {
	return (
		<nav className="navbar navbar-dark bg-dark row">	
			<div className="col-lg-1" />	
			<div className="col-2">
				<h1 className="navbar-brand">Podmesh</h1>
			</div>

			<div className="col-9">
				<ControlPanel 
					inputText={props.inputText}
					inputChange={props.inputChange} 
					enterHandler={props.enterHandler} />
			</div>			
		</nav>
	
		)
}

export default Navbar;