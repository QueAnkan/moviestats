import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"


const Root = () => {

	return (
		<div className="root-container">	
		<Header/>	
			<main className="main">
				<Outlet/>
			</main>
		</div>
		
	)
}
console.log('root')

export default Root