import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home"
import Languages from "./routes/languages/Languages";
import Releases from "./routes/releases/Releases";
import Runtimes from "./routes/runtimes/Runtimes";
import Genres from "./routes/genres/Genres";
// import ErrorPage from "./routes/ErrorPage";

const router = createHashRouter ([

	{
		path: '/',
		element: <Root/>,
	
		children: [
			{
				path: '/',
				element: <Home/>
				},
			{
				path: '/languages', 
				element: <Languages/>
				},
			{
					path: '/releases',
					element: <Releases/>
				},
			{		path: '/runtimes',
					element: <Runtimes/>
				},
			{		path: '/genres',
					element: <Genres/>
				}
		]
			
				// errorElement: <ErrorPage/>
	}

])

export {router}



