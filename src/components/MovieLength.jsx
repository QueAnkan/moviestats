import { Line } from "react-chartjs-2"
import {
	Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

  import { getMovieLength } from "../data/getFunctions/getMovieLength";

  const runtimeLineConfig = getMovieLength()

  const options = {
	scales: {
		y: {
			min: 0,
			max: 200,
			title:{
				display:true,
				text:'Runtime in minutes',
			}
		},
		x: {
			min: 0,
			max: 175,
			title:{
				display:true,
				text:'Movie',
			}
		}
	}
  }


const MovieLength = () => {

	return(
		<section className="chart-container runtime-line">
			<h2>Movie Runtimes</h2>
			<Line options={options} data={runtimeLineConfig}  ></Line>
		</section>
	)
}

export default MovieLength