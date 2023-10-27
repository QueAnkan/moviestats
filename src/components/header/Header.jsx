import { NavLink } from 'react-router-dom'
import './header.css'
import Search from './Search'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { BiHomeHeart} from "react-icons/bi"
import { motion } from 'framer-motion'
import { useSearchState } from '../../assets/useSearchStates'


const Header = () => {

	const {isOpen, handleOnTap, drop, visibleClass} = useSearchState()
	
	return (
		<header>	
			<NavLink to='/' ><BiHomeHeart /></NavLink>
			<section className="tabs-section">
				
				<NavLink to='/languages'>Languages</NavLink>
				<NavLink to='/releases' >Releases</NavLink>
				<NavLink to="/runtimes">Runtimes</NavLink>
				<NavLink to="/genres">Genres</NavLink>
						
				<motion.button className='search-tab'
					onTap={handleOnTap}			
					whileHover={{cursor:'pointer', 
								backgroundColor:['#be0000','#eb6f6f',  ], 
								borderColor:['#8b0000', '#fa6060', ],
								boxShadow:['0 .3em .8em  #8f8f8f', '0 .5em 1.8em  #fa6060' ],
								transition:{
									duration: 0.5,
									repeat:Infinity,
									}
					}}
					animate={{translateY:drop}}
				>
					<FaMagnifyingGlass/>
				</motion.button>
				{isOpen ? null : <motion.div className='background-blur' onTap={handleOnTap}></motion.div> }
				
					{isOpen ? null : <motion.div 
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
											
									</motion.div>	
					}					
			</section>			
		</header>
	)
}

export default Header
