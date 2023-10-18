import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'
import {calculatePremiereData, calculateMovieLength} from '../assets/calculatefunctions'
import colors from './colorschemes'


const allData = docData.concat(featureData, specialsData)

export function getMovieLanguage() {

	// Plocka ut vilka språk som finns och hur många gånger de förekommer
	const languagesCount = {}
	
	allData.forEach((movie) => {
		const language =movie.Language
		
		if(languagesCount[language]){
			languagesCount[language]+=1
	
		}else {
			languagesCount[language]=1
		}
	})

	// Sortera språken i storleksordning från minst till störst 
	const sortedLanguages = Object.entries(languagesCount).sort((a, b) => a[1] - b[1])
	// Plocka ut namnen på språken
	const languages =sortedLanguages.map(language => language[0])
	// Plocka ut antalet förekomster av varje språk
	const languageStats = sortedLanguages.map(language => language[1])


	return{
		labels: languages,
		datasets: [{
			label: "antal filmer per språk",
			data: languageStats,
			backgroundColor: colors,
			
		}]
	}

}

export function getpremiereMonth() {

const docStats = calculatePremiereData(docData)
const featureStats = calculatePremiereData(featureData)
const specialsStats = calculatePremiereData(specialsData)


	return{
		labels: docStats.names,
		datasets: [{
			label: 'Documentaries',
			data:docStats.numbers,
			backgroundColor:colors[1],
		},
		{	label:'Feature Films',
			data:featureStats.numbers,
			backgroundColor:colors[15],
		},
		{	label:'Specials',
			data:specialsStats.numbers,
			backgroundColor:colors[28],
		}
	]
	}
}



export function getMovieLength() {

	const allRuntimes = calculateMovieLength(allData)
	
	const docStats = calculateMovieLength(docData)
const featureStats = calculateMovieLength(featureData)
const specialsStats = calculateMovieLength(specialsData)
	const labels = allRuntimes.sortedRuntimes.map((_, index) => ` ${index + 1}`)

	return{
		labels: labels,
		datasets: [{
			label: 'Documentaries',
			data:docStats.sortedRuntimes,
			backgroundColor:colors[1],
			borderColor:'#000000',
			pointBorderColor: colors[1],
			borderWidth:1,
			pointRadius: 2,
		},
		{
			label: 'Feature Films',
			data:featureStats.sortedRuntimes,
			backgroundColor:colors[15],
			borderColor:'#000000',
			pointBorderColor: colors[15],
			borderWidth:1,
			pointRadius: 2,
		},
		{
			label: 'Specials',
			data:specialsStats.sortedRuntimes,
			backgroundColor:colors[28],
			borderColor:'#000000',
			pointBorderColor: colors[28],
			borderWidth:1,
			pointRadius: 2,
		}
	]
	}
}