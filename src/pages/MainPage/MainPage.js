import React, {useState, useEffect} from 'react'
import CharacterCard from '../Characters/Characters'
import ReactLoader from '../ReactLoader/ReactLoader'
import './MainPage.scss'

export default function MainPage() {

	const [characters, setCharacters] = useState([]);
	const [page] = useState(1);
	const [searchTerm ] = useState('');



	const fetchData = async () => {
		const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`);
		const data = await response.json();
		if(data.results) {
			setCharacters([...characters, ...data.results])
		}
	};
	useEffect(() => {
		fetchData()
	}, [page]);
	return(
		<>
			<h1 className='main-title'>The Rick and Morty </h1>
			<div className='main-container'>
				{
					characters.length ? characters.map((char) => {
							return <CharacterCard key={char.id} character={char}/>
						})
						:
						<ReactLoader type='spin' color='black'/>
				}
			</div>
		</>
	)
}