import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'
import colors from './colorschemes'

const allFictionMovieData = featureData.concat(specialsData)


export function getMovieGenre() {

	const genreCount = {}

allFictionMovieData.forEach((movie) => {
	const genre = movie.Genre

	if(genreCount[genre]){
		genreCount[genre]+=1
	}else {
		genreCount[genre]=1
	}
})

const genres = Object.entries(genreCount)
const documentaries = ['Documenteries',  docData.length]

genres.push(documentaries)
const genreNames = genres.map(genre => genre[0])
const genreStats =  genres.map(genre => genre[1])

	return{
		labels:genreNames,
		datasets: [{
			label:'Genres',
			data:genreStats,
			backgroundColor:colors,
		}]
	}
}