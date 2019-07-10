import React from 'react';
import { FaUndo } from 'react-icons/fa';
import { FaGithubSquare} from 'react-icons/fa';

const ControlPanel = props => {
	return (
		  <div className="form-inline">
		    <input 
		    	className="form-control mr-sm-3" 
		    	placeholder="RSS Feed URL" 
		    	aria-label="FeedURL" 
		    	onChange={props.inputChange} />
		    <button 
		    	onClick={props.enterHandler}
		    	style={{height: "2.5em"}}
		    	className="btn btn-outline-success my-2 my-sm-0 mr-sm-3">
		    	Enter
		    </button>
		    
		    <button 
		    	className="btn btn-outline-warning mr-sm-3"
		    	style={{width:"2.5em", height: "2.5em"}} > 
		    	<FaUndo className="mb-1" /> 
		    </button>
		
		    <a href="https://github.com/maxxdmg/podmesh"> 
		    	<FaGithubSquare size="2.85em" /> 
		    </a> 

		  </div>
		)
}

export default ControlPanel;