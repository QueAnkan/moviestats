import MovieLength from '../../components/MovieLength'
import './runtimes.css'
import { easeIn, motion } from 'framer-motion'

const Runtimes = () => {

	return(
		<motion.section className="runtimes"
		initial={{backgroundColor: '#ffffff '}}
		animate={{backgroundColor:'#000000'}}
		transition={{duration:3, delay:1.5, type: easeIn }}>
		
			<motion.article
			initial= {{rotateX:  90, transformOrigin: 'bottom', opacity: 0.5,  boxShadow:' 15em 5em  rgb(143, 143, 143)', backgroundColor: '#292929'}}
			animate = {{rotateX: 0, opacity:1, transformPerspective: 1000, boxShadow:' 0 .3em .8em  rgb(143, 143, 143)', backgroundColor: '#ffffff'}}
			transition={{duration: 1, delay:1, type: easeIn }}>
			<MovieLength/>
			</motion.article>
		</motion.section>

	)
}

export default Runtimes