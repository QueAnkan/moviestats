import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'

const Root = () => {

	return (
		<div className="root-container">	
		<Header/>	
			<main className="main">
				<NavLink to='/' >
					<motion.h1
					whileHover={{
						scale:1.1
					}}
					transition={{
						type: "spring", stiffness: 300, damping:12
					}}
					>MovieStats</motion.h1>
				</NavLink>
				<Outlet/>
			</main>
		</div>
		
	)
}
console.log('root')

export default Root