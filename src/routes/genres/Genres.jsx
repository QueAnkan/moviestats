import MovieGenre from '../../components/MovieGenre'
import { motion } from 'framer-motion'
import './genre.css'

const Genres = () => {

	return(
		<motion.section className="genres"
				initial= {{	
					scaleX:0, 
					transformOrigin: 'left',
					translateX:0
						}}
				animate= {{	
					scaleX:[0, 0.2, 0.2, 0.6, 0.6, 0.9, 0.9, 1.2, 1 ],
					translateX:[0,-25, 15, 15, 0]
						}}
				transition={{
					duration:2.5, 
					delay: 1.4, 
					type:'linear',
					translateX:{duration:0.8,delay:3.8,type:'easeOut'}		
						}}>
				
			<motion.article
				initial= {{	
					scaleX:0, 
					transformOrigin: 'left',
					translateX:0
						}}
				animate= {{	
					scaleX:[0, 1, 0, 1, 0.3, 1, 0.45, 1, 0.6,1  ],
					translateX:[0,-25, -25, 0, 8, 0]
						}}
				transition={{
					duration:2.5, 
					delay: 0.8, 
					type:'linear',
					translateX:{duration:0.8,delay:3.9, type:'easeOut'}
						}}				>
				<MovieGenre/>
			</motion.article>
		</motion.section>
	)
}

export default Genres