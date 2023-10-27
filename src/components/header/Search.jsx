import { useState } from "react"
import docData from '../../data/documentaries.json'
import featureData from '../../data/feature-films.json'
import specialsData from '../../data/specials.json'
import ShowOneMovie from './ShowOneMovie'
import { animate, stagger, motion, delay } from "framer-motion"


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
			<div>
				<label htmlFor="search">Search</label>
				<input 
				type="text"
				id="search"
				placeholder="Enter title"
				value={searchString}
				onChange={handleOnChange} />
			</div>
			<div className="search-result">
				<h3>Search result:</h3>
				<motion.ul					
				>						
					{	
						searchString === ''?
						null:
						movieMatches.length === 1? 
						<ShowOneMovie movie={movieMatches[0]}/> :
						movieMatches.map(movie => 
						<motion.li							
							key={movie.Title+movie.Premiere}>{movie.Title}</motion.li>)
					}		
				</motion.ul>
			</div>
		</section>
	)
}

export default Search



// FUNGERAR INTE! VARFÖR??
// const list = {
	// 	hidden: {opacity:0, 
	// 			scaleY:0},
	// 	show: {opacity:1,
	// 			scaleY:1,
	// 			transition:{
	// 				duration:5,
	// 			// staggerChildren: 4
	// 		}
	// 	}
	// }

	// variants={list}
	// initial='hidden'
	// animate= 'show'

	// const listItems = {
	// 		hidden: {opacity:0},
	// 		show: { opacity: 1,
	// 		transition:{
	// 			duration: 0.3 }}

	// }

		// variants={listItems}
								// initial= 'hidden'
								// animate= 'show'