let yValues = [60000, 150000, 350000];
let xValues = ['jun', 'middle', 'senior'];
const incomeChart = new Chart("income__chart", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [{
			fill: true,
			backgroundColor: "rgba(255,0,0,0.5)",
			pointRadius: 3,
			borderColor: "rgba(255,0,0,0.5)",
			data: yValues
		}]
	},
	options: {
		legend: {
			display: 0,
		}
	}
})