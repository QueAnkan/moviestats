
// funktion för att räkna ut antal premiärer per månad (samt plocka ut namn på alla månader som innehåller premiärer)

function calculatePremiereData(data) {
	// plocka ut datum för samtliga premiärer och sedan skilj ut endast månad för varje premiär
	const dates = data.map(object => object.Premiere)
	const months = dates.map(month => month.split(' ')[0])
	
	const allMonths =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


	// räkna och samla hur många gånger varje månad förekommer => premiärer/månad i key/value par
	const monthCount = {}
	
	allMonths.forEach((month) => {
		if(months.includes(month)){
			const amount = months.filter(m => m === month).length
			monthCount[month] = amount
		} else {
			monthCount[month]=0
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
			}else{
				return Number(timing[0])
			}
	})
	
	const sortedRuntimes = [...runtime].sort((a, b) => a - b)
	return{
		sortedRuntimes
		
	}
}

export {calculateMovieLength, calculatePremiereData}