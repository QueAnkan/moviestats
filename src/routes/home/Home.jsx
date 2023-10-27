import './home.css'
import { motion } from 'framer-motion'


const Home = () => {

	return(
		
		<section className="home">
		
				<motion.article
				initial={{scale:5, color:'#ffffff'}}
				animate={{scale:[5, 0.8, 1], color:['#ffffff', '#ffffff', '#ffffff', '#000000']}}
				transition={{duration: .8, delay:0.5, ease:'easeInOut'}}
				drag
				dragConstraints={{left: 0, right:0, top: 0, bottom:0}}
				whileHover={{cursor:'grab'}}>
				<h2>A MovieFlex app for our movie statistics!</h2>
				<p>Learn more about our fantastic movie collection. Hit our search function and see what movies are available rigth now.</p>
				<p>If you are interested in statistics, you can find out which languages you could encounter, see how short our shortest movie is or how many movies we released every month during 2022! You can easely view our many different genres, and find out how many movies fall into each catagory. Enjoy! </p>	
				</motion.article>
				
				<div className='easterEgg'>		
						<div>🤓</div>
						<div>👻</div>
						<div>🤖</div>
						<div>🤠</div>
					</div>

		</section>
		
			
	)
}

export default Home