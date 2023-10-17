import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { getMovieLanguage } from "../data/getMovie"

const languagePieConfig = getMovieLanguage()

const MovieLanguages = () =>{

	return(
		<section>
			<h2>Filmer fördelade på språk</h2>
			<Pie data={languagePieConfig}></Pie>
		</section>
	)
}

export default MovieLanguages