import { NavLink } from 'react-router-dom'
import './header.css'
import Search from './Search'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { BiHomeHeart} from "react-icons/bi"
import { useState } from 'react'

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
				
				<button className='search-tab'
				onClick={handleOnClick}>
				<FaMagnifyingGlass/>
				</button>
				{isOpen ? null : <div className='background-blur' onClick={handleOnClick}></div> }
				<div className={visibleClass}>
			{isOpen ? null : <Search/> }	
			</div>		
			</section>
			
		</header>
	)
}

export default Header

