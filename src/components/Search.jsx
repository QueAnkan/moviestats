import { useState } from "react"
import docData from '../data/documentaries.json'
import featureData from '../data/feature-films.json'
import specialsData from '../data/specials.json'
import ShowOneMovie from './ShowOneMovie'


const Search = ()  => {
 const [searchString, setSearchstring] = useState('')
const movies = docData.concat(featureData, specialsData)


const handleOnChange = (event) => {
	setSearchstring(event.target.value)
}

const movieMatches = movies.filter((movie) =>{
	return movie.Title.toLowerCase().includes(searchString.toLowerCase())	
})

	return(
		<section className="search-section">
			<label htmlFor="search">Search</label>
			<input 
			type="text"
			id="search"
			placeholder="Enter title"
			value={searchString}
			onChange={handleOnChange} />

			<div>
			{	
				searchString === ''?
				null:
				movieMatches.length === 1? 
				<ShowOneMovie movie={movieMatches[0]}/> :
				movieMatches.map(movie => <div key={movie.Title+movie.Premiere}>{movie.Title}</div>)
			}		
			</div>
		</section>
	)
}

export default Search

