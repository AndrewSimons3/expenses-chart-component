'use strict';

const fetchExpensesData = async () => {
	const response = await fetch('./data.json');
	const data = await response.json();
	console.log(data);
};

fetchExpensesData();

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
		datasets: [
			{
				data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28,25.48],

				backgroundColor: [
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
					'hsl(10, 79%, 65%)',
				],

        borderWidth: 0,
        borderRadius: 5,
				hoverBackgroundColor: ['hsl(186, 34%, 60%)'],
			},
		],
	},
	options: {
		onClick: this.ClickHandler,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					display: false,
				},
				grid: {
					drawBorder: false,
					display: false,
				},
			},
			x: {
				grid: {
					drawBorder: false,
					display: false,
				},
			},
		},
	},
});
