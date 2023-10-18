
// funktion för att räkna ut antal premiärer per månad (samt plocka ut namn på alla månader som innehåller premiärer)

function calculatePremiereData(data) {
	// plocka ut datum för samtliga premiärer och sedan skilj ut endast månad för varje premiär
	const dates = data.map(object => object.Premiere)
	const months = dates.map(month => month.split(' ')[0])
	
	// räkna och samla hur många gånger varje månad förekommer => premiärer/månad
	const monthCount = {}
	
	months.forEach((month) => {
		if(monthCount[month]){
			monthCount[month]+=1
		} else {
			monthCount[month]=1
		}
	})

// plocka ut namn på de månader som förekommer resp. antal premiärer per månad
	const monthNames = Object.keys(monthCount)
	const premiereNumbers = Object.values(monthCount)

	return {
		names: monthNames,
		numbers: premiereNumbers
	}
}

export default calculatePremiereData
