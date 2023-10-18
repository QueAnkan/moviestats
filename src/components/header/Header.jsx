import './header.css'

const Header = () => {


	return (
		<header>	
			<section className="tabs-section">
				<a href="#">Languages</a>
				<a href="#">Releases</a>
				<a href="#">Runtimes</a>
				<a href="#">Genres</a>
				
				<div className='search'></div>
				
			</section>
		</header>
	)
}

export default Header

// TODO byt ut a mot navlinks! diven ska bli ett sökfält som fälls ut åt sidan