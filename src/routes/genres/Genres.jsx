import MovieGenre from '../../components/MovieGenre'
import { motion } from 'framer-motion'
import './genre.css'

const Genres = () => {

	return(
		<section className="genres">
			
			<motion.article
				>
				<MovieGenre/>
			</motion.article>
		</section>

	)
}

export default Genres