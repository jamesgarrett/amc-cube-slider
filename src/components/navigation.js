import React from 'react'
import { NavLink } from 'react-router-dom';

  class Navigation extends React.Component{
	render(){
		return(    
			<nav>
		      <ul className="left-nav">
		        <li><NavLink to='/'>Home</NavLink></li>
		        <li><NavLink to='/about'>Getting Started</NavLink></li>
		        <li><NavLink to='/typography'>Typography</NavLink></li>
		        <li><NavLink to='/contact'>Grids</NavLink></li>
		      </ul>
		    </nav>
		)
	}
	
}
export default Navigation;