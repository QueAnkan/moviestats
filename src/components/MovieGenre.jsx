import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend,  BarElement, LinearScale, CategoryScale  } from 'chart.js';
import { getMovieGenre } from "../data/getFunctions/getMovieGenre";
ChartJS.register(Tooltip, Legend, LinearScale,
	BarElement, CategoryScale);

const genreBarConfig = getMovieGenre()

const options = {
	indexAxis: 'y' ,
	elements: {
		bar: {
		borderWidth: 1,
		},
		maintainaspectRatio: false
	},
	catagorySpacing: 100 ,
	scales:{
		y:{
			barPercentage:1.2,
			max:70,
			
		}
	},
	plugins:{
		Legend:{
			position: 'right',
		}
	}
}

const MovieGenre = () => {

	return(
		<section className="chart-container horiz-bar">
			<h2>Number of movies in different genres</h2>
			<Bar data={genreBarConfig} options={options} height='5000px' width='4800px'></Bar>
		</section>
	)
}

export default MovieGenre