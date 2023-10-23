import PremiereMonths from "../../components/PremiereMonths"
import './releases.css'
import { motion } from "framer-motion"

const Releases = () => {

	return(
		<section className="releases">
			
			<motion.article
			initial= {{scale:0.02,}}
			 animate={{scale:1, rotate:[-360, 360, 365, 355,360 ], }}
			 transition={{ duration: 1, delay: 0.8, type: 'easeOut'}}>	
			<PremiereMonths/>
			</motion.article>
		</section>

	)
}

export default Releases