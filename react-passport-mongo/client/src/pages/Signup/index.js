import React, { Component } from 'react';
import styles from './style.module.css';
import { user as userAPI } from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import Card from '../../components/Card';
import fail from './fail.gif';
import patrick from './patrick.gif';
import monkey from './monkey.gif';
import fail2 from './fail2.gif';
import tim from './tim.gif';
import pug from './pug.gif';
import pw from './pw.gif';
import help from './help.gif';
import kid from './kid.gif';



class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			passwordConf: ''
		};
	}

	componentDidMount() {}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.props.setLoading(true);
    
    // validate all fields
    if (!this.state.email || !this.state.password || !this.state.passwordConf) {
		  this.props.setLoading(false);
      // set error alert to user
      return this.props.setAlertInfo({theme:"warning", message:"Please fill all required fields"})
    }

    // validate pass === to pass confirmation.
    if(this.state.password.trim() !== this.state.passwordConf.trim()) {
		  this.props.setLoading(false);
      // set error alert to user
      return this.props.setAlertInfo({theme:"warning", message:"Your password fields do not match."})
    }

    // if good to go
		userAPI
				.signup({
					username: this.state.username.trim(),
					email: this.state.email.trim(),
					password: this.state.password.trim(),
					passwordConf: this.state.passwordConf.trim()
				})
				.then(res => {
					console.log(res);
					if (res.status === 200) {
						this.props.setUser(res.data);
						this.props.setLoading(false);
						return <Redirect to='/home' />;
					} else {
						this.props.setLoading(false);
						this.props.setAlertInfo({
							theme: 'warning',
							message: res.response.data
						});
					}
				})
				.catch(err => {
					this.props.setLoading(false);
					console.log(err.response.data);
					this.props.setAlertInfo({ theme: 'warning', message: err.response.data });
				});
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size='3'>
					<img src={fail} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={patrick} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={pw} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={help} alt="loading..." />
					</Col>
				</Row>
				<Row>
				<Col size ='4'>
				<img src={fail2} alt="loading..." />

				</Col>
					<Col size='4'>
					
						<Card title='Signup'>
							<form className={styles.form} onSubmit={this.handleFormSubmit}>
								<Input
									value={this.state.username}
									onChange={this.handleInputChange}
									name='username'
									placeholder='username (required)'
								/>
								<Input
									value={this.state.email}
									onChange={this.handleInputChange}
									name='email'
									placeholder='email (required)'
								/>
								<Input
									value={this.state.password}
									onChange={this.handleInputChange}
									name='password'
									placeholder='(required)'
									type='password'
								/>
								<Input
									value={this.state.passwordConf}
									onChange={this.handleInputChange}
									name='passwordConf'
									placeholder='(required)'
									type='password'
								/>

								<FormBtn
									disabled={!(this.state.email && this.state.password && this.state.passwordConf)}
									theme='primary'
								>
									signup
								</FormBtn>
							</form>
						</Card>
					</Col>
					<Col size='4'>
					<img src={monkey} alt="loading..." />
					</Col>
				</Row>
				<Row>
					<Col size='3'>
					<img src={tim} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={pug} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={help} alt="loading..." />
					</Col>
					<Col size='3'>
					<img src={kid} alt="loading..." />
					</Col>
				</Row>

				

				{/* redirect on authenticated */}
        { this.props.user && this.props.user._id 
          ?  <Redirect to='/home' /> 
          :  <div></div> }
			</Container>
		);
	}
}

export default Signup;
