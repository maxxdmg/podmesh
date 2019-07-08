import React from 'react';
import ControlPanel from '../ControlPanel';

const Navbar = props => {
	return (
		<nav className="navbar navbar-dark bg-dark row">
			<div className="col-3"/>
			
			<div className="col-2">
				<h1 className="navbar-brand">Podmesh</h1>
			</div>

			<div className="col-4">
				<ControlPanel 
					inputText={props.inputText}
					inputChange={props.inputChange} 
					enterHandler={props.enterHandler} />
			</div>

			<div className="col-2" />
			
		</nav>
	
		)
}

export default Navbar;