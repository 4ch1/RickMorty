import React from 'react'
import './Characters.scss'

export default function Characters(props) {
	return(
		<div className='characters'>
			<img src={props.character.image} alt=""/>
			<div className='character-info'>
				<h3 id='character-name'>Name: {props.character.name}</h3>
				<p>Character: {props.character.species}</p>
				<p>Status: {props.character.status}</p>
				<p>Origin: {props.character.origin.name}</p>
			</div>
		</div>
	)
}