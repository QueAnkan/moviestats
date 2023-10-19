import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend,  BarElement, LinearScale, CategoryScale  } from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale,
	BarElement, CategoryScale);

	import { getPremiereMonth } from "../data/getPremiereMonth";

	const monthBarConfig = getPremiereMonth()

const PremiereMonths = () =>{

	return(
		<section className="chart-container premiere-bar">
			<h2>Premieres every month</h2>
			<Bar data={monthBarConfig} ></Bar> 
		</section>
	)
}

export default PremiereMonths