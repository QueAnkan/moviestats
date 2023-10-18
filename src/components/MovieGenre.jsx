import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend,  BarElement, LinearScale, CategoryScale  } from 'chart.js';
import { getMovieGenre } from "../data/getMovieGenre";
ChartJS.register(Tooltip, Legend, LinearScale,
	BarElement, CategoryScale);

const genreBarConfig = getMovieGenre()

const options = {
	indexAxis: 'y' ,
elements: {
bar: {
  borderWidth: 2,
},
}}

const MovieGenre = () => {

	return(
		<section>
			<Bar data={genreBarConfig} options={options}></Bar>
		</section>
	)
}

export default MovieGenre