import MovieLength from '../../components/MovieLength'
import { motion } from 'framer-motion'
import './runtimes.css'

const Runtimes = () => {

	return(
		<motion.section className="runtimes"
				initial={{	backgroundColor: '#ffffff '}}
				animate={{	backgroundColor:'#000000'}}
				transition={{duration:3, 
							delay:1.5, 
							type: 'easeIn' }}>		
			<motion.article
					initial= {{	rotateX: 90,
								rotateZ:-45,
								transformOrigin: 'bottom left', 
								translateY: -3,
								opacity: 0,  
								boxShadow:' 15em 5em  rgb(143, 143, 143)', backgroundColor: '#292929'
							}}
					animate = {{rotateX: 0,
								rotateZ:0, 
								translateY: 0,
								opacity:1, 
								transformPerspective: 1000, 
								boxShadow:' 0 .3em .8em  rgb(143, 143, 143)', backgroundColor: '#ffffff', 
							}}
					transition={{duration: 1,
								delay:1, 
								type: 'easeIn' 
							}}>
				<MovieLength/>
			</motion.article>
		</motion.section>

	)
}

export default Runtimes