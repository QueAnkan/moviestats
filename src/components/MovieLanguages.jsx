import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { getMovieLanguage } from "../data/getMovieLanguages"
import '../routes/languages/languages.css'

const languagePieConfig = getMovieLanguage()

const MovieLanguages = () =>{

	return(
		<section className="chart-container language-pie">
			<h2>Number of movies distributed by language</h2>
			<Pie data={languagePieConfig}
></Pie>
		</section>
	)
}

export default MovieLanguages