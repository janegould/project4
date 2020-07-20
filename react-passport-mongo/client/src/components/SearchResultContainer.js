import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import API from '../utils/AJAX';
import style from "./style.module.css";

class SearchResultContainer extends Component {
	state = {
		search: '',
		results: []
	};

	// When this component mounts, search the Giphy API for pictures of kittens
	componentDidMount() {
		this.searchGiphy('kittens');
	}

	searchGiphy = query => {
		let wordPromiseArray = '';
    wordPromiseArray = query.trim().split(' ')
      .map(word=> API.search(word));

    
    Promise.all(wordPromiseArray).then(resArray =>this.setState({ results: resArray}) )


/*  */
/*  Math.floor(math.random()*resArray.length()) console.log(resArray) */
		// API.search(query)
		// 	.then(res => this.setState({ results: res.data.data }))
		// 	.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
		
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleFormSubmit = event => {
		event.preventDefault();
		this.searchGiphy(this.state.search);
	};



	render() {
		return (
			<div >
				<SearchForm
					
					search={this.state.search}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				{/* render all results */}

				{this.state.results.map(result => {
				console.log(result.data.data);
				return result.data.data.map(element => (
					<span key={element.id}>
						<img
							alt={element.title}
							className={style.gif}
							src={element.images.original.url}
						/>
					</span>
				));
			})}
			</div>
		);
	}
}

export default SearchResultContainer;
