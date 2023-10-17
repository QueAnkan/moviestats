import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend,  BarElement, LinearScale, CategoryScale  } from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale,
	BarElement, CategoryScale);

	import { getpremiereMonth } from "../data/getMovie";

	const monthBarConfig = getpremiereMonth()

const PremiereMonths = () =>{

	return(
		<section>
			<h2>Premieres every month</h2>
			<Bar data={monthBarConfig} ></Bar> 
		</section>
	)
}

export default PremiereMonths