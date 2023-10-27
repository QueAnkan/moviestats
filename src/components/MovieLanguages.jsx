import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { motion } from "framer-motion"
import { getMovieLanguage } from "../data/getFunctions/getMovieLanguages"
import '../routes/languages/languages.css'


const languagePieConfig = getMovieLanguage()

const MovieLanguages = () =>{

	return(
		<motion.section className="chart-container language-pie"
				initial= {{	
					translateY: -200, 
					opacity:0, 
					scaleX:{ transformOrigin: 'bottom'}, 
					scaleY:{ transformOrigin: 'bottom'}
						}}

				animate={{	
					translateY: 0 , 
					opacity:1, 
					scaleX:[1, 1.3, 0.8, 1.1, 0.9, 1], 
					scaleY:[1, 0.8, 1.1, 0.9, 1.05, 1]
						}}

				transition={{ 
					duration: .3, 
					delay:0.8, 
					type: 'easeIn', 
					scaleX:{delay:1, 
					duration:1.5, 
					type:'easeOut'}, 
					scaleY:{delay:1, duration:1.5, type:'easeOut'}
						}}	
		>
			<h2>Number of movies distributed by language</h2>
			<Pie data={languagePieConfig}></Pie>
		</motion.section>
	)
}

export default MovieLanguages