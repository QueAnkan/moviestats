import docData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'
import {calculatePremiereData} from '../assets/calculatefunctions'
import colors from './colorschemes'


export function getPremiereMonth() {

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
	
	
	