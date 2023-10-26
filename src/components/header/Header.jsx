import { NavLink } from 'react-router-dom'
import './header.css'
import Search from './Search'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { BiHomeHeart} from "react-icons/bi"
import { useState } from 'react'
import { easeOut, motion } from 'framer-motion'

const Header = () => {
	const [isOpen,setIsOpen] = useState(true)

	const visibleClass = 'visible ' + (isOpen ? 'invisible' : '')

	const handleOnClick = () => {
		console.log('click');
		setIsOpen(!isOpen)
		
	}

	return (
		<header>	
			<NavLink to='/' ><BiHomeHeart /></NavLink>
			<section className="tabs-section">
				
				<NavLink to='/languages'>Languages</NavLink>
				<NavLink to='/releases' >Releases</NavLink>
				<NavLink to="/runtimes">Runtimes</NavLink>
				<NavLink to="/genres">Genres</NavLink>
						
				<motion.button className='search-tab'
					onClick={handleOnClick}
					whileHover={{	cursor:'pointer', 
									backgroundColor:['#be0000','#eb6f6f',  ], 
									borderColor:['#8b0000', '#fa6060', ],
									boxShadow:['0 .3em .8em  #8f8f8f', '0 .5em 1.8em  #fa6060' ],
									transition:{
										duration: 0.5,
										repeat:Infinity,
									}
								}}>
					<FaMagnifyingGlass/>
				</motion.button>
				{isOpen ? null : <div className='background-blur' onClick={handleOnClick}></div> }
				
				
					{isOpen ? null :
					<motion.div 
						className={visibleClass}
						initial={{	translateX:1280, 								
									skewX:-45, 												
								}} 
						animate= {{	translateX:0, 
									skewX:[-45,-45,-45,0],
								}}
						transition={{duration:.5, 
									ease: 'easeOut'
								}}>	
						<Search/> 
							
					</motion.div>	 }	
				
				
			</section>
			
		</header>
	)
}

export default Header

