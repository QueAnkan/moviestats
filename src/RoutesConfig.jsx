import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home"
// import ErrorPage from "./routes/ErrorPage";

const router = createHashRouter ([

	{
		path: '/',
		element: <Root/>,
	
		children: [
			{
				path: '/',
				element: <Home/>
			}
		]
			
				// errorElement: <ErrorPage/>
	}

])

export {router}



