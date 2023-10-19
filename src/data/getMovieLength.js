import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'
import {calculateMovieLength} from '../assets/calculatefunctions'
import colors from './colorschemes'

const allData = docData.concat(featureData, specialsData)

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