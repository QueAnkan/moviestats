import MovieLanguages from "../../components/MovieLanguages"
import { easeIn, motion } from "framer-motion"
import './languages.css'

const Languages = () => {

	return(
		<section className="languages">
		
			<motion.article
			initial= {{scale:0.02, }}
			 animate={{scale:1, rotate:[-360, 360, 365, 355,360 ]}}
			 transition={{ duration: 1, delay: 0.8, type: 'easeOut'}}
			>
			< MovieLanguages/>
			</motion.article>
		</section>

	)
}

export default Languages