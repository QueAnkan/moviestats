import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'

const allData = docData.concat(featureData, specialsData)


const colors = [
	"#FF69B4", // Hot Pink
	"#FF00FF", // Magenta
	"#FF1493", // Deep Pink
	"#8A2BE2", // Blue Violet
	"#9932CC", // Dark Orchid
	"#9400D3", // Dark Violet
	"#8B008B", // Dark Magenta
	"#800080", // Purple
	"#4B0082", // Indigo
	"#6A5ACD", // Slate Blue
	"#483D8B", // Dark Slate Blue
	"#7B68EE", // Medium Slate Blue
	"#4169E1", // Royal Blue
	"#0000FF", // Blue
	"#1E90FF", // Dodger Blue
	"#00BFFF", // Deep Sky Blue
	"#87CEEB", // Sky Blue
	"#00CED1", // Dark Turquoise
	"#20B2AA", // Light Sea Green
	"#008B8B", // Dark Cyan
	"#008080", // Teal
	"#00FA9A", // Medium Spring Green
	"#ADFF2F", // Green Yellow
	"#32CD32", // Lime Green
	"#00FF00", // Green
	"#7FFF00", // Chartreuse
	"#FFFF00", // Yellow
	"#FFD700", // Gold
	"#FFA500", // Orange
	"#FF8C00"  // Dark Orange

  ];



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
			backgroundColor: colors
		}]
	}

}