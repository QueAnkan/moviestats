import docData from '../documentaries.json'
import featureData from '../feature-films.json'
import specialsData from '../specials.json'
import  {choseColorStartIndex}  from '../colorschemes'


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
	const sortedLanguages = Object.entries(languagesCount).sort((b, a) => a[1] - b[1])
	// Plocka ut namnen på språken
	const languages =sortedLanguages.map(language => language[0])
	// Plocka ut antalet förekomster av varje språk
	const languageStats = sortedLanguages.map(language => language[1])

	

	return{
		labels: languages,
		datasets: [{
			label: "Number of movies",
			data: languageStats,
			backgroundColor: choseColorStartIndex(8),
		}]
	}

}


