import { NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {


	return (
		<header>	
			<section className="tabs-section">
				
				<NavLink to='/languages'>Languages</NavLink>
				<NavLink to='/releases' >Releases</NavLink>
				<NavLink to="/runtimes">Runtimes</NavLink>
				<NavLink to="/genres">Genres</NavLink>
				
				<div className='search'></div>
				
			</section>
		</header>
	)
}

export default Header

// TODO byt ut a mot navlinks! diven ska bli ett sökfält som fälls ut åt sidan