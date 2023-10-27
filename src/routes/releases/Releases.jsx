import PremiereMonths from "../../components/PremiereMonths"
import { motion } from "framer-motion"
import './releases.css'

const Releases = () => {

	return(
		<section className="releases">		
			<motion.article
					initial= {{	
						scale:0,							
							}}
					animate={{	
						scale:[0, 3,  1], 
						rotate:[0, 740, 700, 730, 710, 725 , 718 , 721 , 720]  
							}}
					transition={{
						duration:2.5, 
							delay: 0.9, 
							type: 'easeOut',
							scale:{duration: .8}
							}}>	
				<PremiereMonths/>
			</motion.article>
		</section>
	)
}

export default Releases