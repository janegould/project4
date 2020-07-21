import React from 'react';
import { Button } from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { user as userAPI } from '../../utils/API';
import style from "./style.module.css";

const Navbar = props => {
	const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => {
				throw e;
			});
	};

	// get location from react router location hook
	let location = useLocation();

	console.group('navbar');
	console.info(`🌎 page rendered at path: '${location.pathname}'`, '\n');
	console.info('🤖 user', props.user);
	console.groupEnd();

	return (
		<div
            style={{ padding: 4,backgroundColor: 'white', lineHeight: '20px' , textAlign: "center" }}   
        >
			<Link to='/'>
				<div style = {{fontSize: '50px', color: 'rgb(237, 29, 98)', backgroundColor: "White"}} className={`${style.logo} btn`} >
				Picto-giphy
				</div>
			</Link>
			{ props.user._id 
				?  <Button theme='dark' onClick={signout}><i className='fa fa-sign-out fa-1x' aria-hidden='true'></i></Button>
				:  location.pathname === '/signup' 
					? 	<Link to='/login'><Button style={{backgroundColor : 'rgb(237, 29, 98)', borderColor : 'rgb(237, 29, 98)'}}>login</Button></Link>
				
					:  <Link to='/signup'><Button style={{backgroundColor : 'rgb(237, 29, 98)', borderColor : 'rgb(237, 29, 98)'}} >signup</Button></Link>
			}
		</div>
	);
};
export default Navbar;
