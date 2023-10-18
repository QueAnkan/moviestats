import { Line } from "react-chartjs-2"
import {
	Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

  import { getMovieLength } from "../data/getMovie";

  const runtimeLineConfig = getMovieLength()

  const options = {
	scales: {
		y: {
			min: 1,
			max: 200
		},
		x: {
			min: 0,
			max: 200
		}
	}
  }


const MovieLength = () => {

	return(
		<section className="chart-container">
			<h1></h1>
			<Line options={options} data={runtimeLineConfig}  ></Line>
		</section>
	)
}

export default MovieLength