import MovieLength from '../../components/MovieLength'
import './runtimes.css'
import { easeIn, motion } from 'framer-motion'

const Runtimes = () => {

	return(
		<section className="runtimes">
		
			<motion.article
			initial= {{rotateX:  -90, transformOrigin: 'top', opacity: 0.5, boxShadow:' 0 55em 5em  rgb(143, 143, 143)'}}
			animate = {{rotateX: 0, opacity:1, transformPerspective: 3000, boxShadow:' 0 .1em .1em  rgb(143, 143, 143)'}}
			transition={{duration: 1.5, delay: 0.6, }}>
			<MovieLength/>
			</motion.article>
		</section>

	)
}

export default Runtimes