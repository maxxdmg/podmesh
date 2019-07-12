import React from 'react';
import ControlPanel from '../ControlPanel';

const Navbar = props => {
	return (
		<nav className="navbar navbar-dark bg-dark row">
			<div className="col col-md-1 col-0" />	
			<div className="col col-md-auto col-2">
				<h1 className="navbar-brand">Podmesh</h1>
			</div>
			<div className="col col-md-auto col-0" />
			<div className="col col-md-auto col-7">
				<ControlPanel 
					inputText={props.inputText}
					inputChange={props.inputChange} 
					enterHandler={props.enterHandler} />	
			</div>	
			<div className="col col-md-1 col-0" />
		</nav>
	
		)
}

export default Navbar;