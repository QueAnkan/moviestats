import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'
import calculatePremiereData from '../assets/calculatefunctions'
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

// använd split för att ta ut siffrorna, omvandla till nummmer med Numbers() skriv en if-sats om strängen är lång ska index 0 multipliceras med 60 och sedan adderas med index 2 . Skapa en ny array med alla värden sorterade.

function calculateMovieLength(data) {

	const runtime = data.map(object => {
		const timing = object.Runtime.split(' ')
			if(timing.length === 4){
				const hours = Number(timing[0])
				const minutes = Number(timing[2])
				return hours * 60 + minutes
			}else if(timing.length === 2 && timing[1]==='h'){
				const hours = Number(timing[0])
				return hours * 60
			}
			
			else{
				return Number(timing[0])
			}
	
	})
	
	const sortedRuntimes = ( runtime.sort((a, b) => a - b))
	return{
		sortedRuntimes
		
	}
}


const testData = calculateMovieLength(allData)
	
console.log('TESTDATA resultat: ', testData);

export function getMovieLength() {

	const allRuntimes = calculateMovieLength(allData)
	const labels = allRuntimes.sortedRuntimes.map((_, index) => ` ${index + 1}`)

	return{
		labels: labels,
		datasets: [{
			label: 'Runtimes',
			data:allRuntimes.sortedRuntimes,
			borderColor:colors,
			pointBorderColor: colors
		}]
	}
}