import React from 'react';
import Card from '@material-ui/core/Card';
import style from "./style.module.css";

function ResultList(props) {
	return (
		<Card className='list-group'>
			{props.results.map(result => {
				console.log(result.data.data);
				return result.data.data.map(element => (
					<li className='list-group-item' key={element.id}>
						<img
							alt={element.title}
							className='img-fluid'
							src={element.images.original.url}
						/>
					</li>
				));
			})}
		</Card>
	);
}

export default ResultList;
