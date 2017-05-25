// people count line chart start

var DashboardCharts = function(){
	this.create_people_count_chart = function(){
		try{
			//code to populate chart goes here
			console.log('function successfully executed!');
			Highcharts.chart('people_count', {
				exporting:{
					enabled: false
				},

				title: {
					text: 'Yearly People Count'
				},

				subtitle: {
					text: 'Graphical Representaion'
				},

				yAxis: {
					title: {
						text: 'Number of People'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},

				plotOptions: {
					series: {
						pointStart: 2010
					}
				},

				series: [{
					name: 'People In',
					data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
				}, {
					name: 'People Out',
					data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
				}]

			});
		}
		catch(err)
		{
			console.log(`DashboardCharts::create_people_count_chart:${err.message}`);
		}
	};

	this.create_age_group_chart = function(){
		try{
			//code to populate chart goes here
			console.log('age_group chart executed successfully!');
			Highcharts.chart('age_group', {
				exporting:{
					enabled: false
				},
				chart: {
					type: 'column'
				},
				title: {
					text: 'Peoples Age Group'
				},
				subtitle: {
					text: '<a href="#">Graphical Representation</a>'
				},
				xAxis: {
					categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Population (millions)',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' millions'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'top',
					x: -40,
					y: 80,
					floating: true,
					borderWidth: 1,
					backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
					shadow: true
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Year 1800',
					data: [107, 31, 635, 203, 2]
				}, {
					name: 'Year 1900',
					data: [133, 156, 947, 408, 6]
				}, {
					name: 'Year 2012',
					data: [1052, 954, 4250, 740, 38]
				}]
			});

		}
		catch(err){
			console.log(`DashboardCharts::create_age_group_chart:${err.message}`);
		}
	};
};  

$(document).ready(function(){
	//code to populate chart goes here
	var dashboard_chart_instance = new DashboardCharts();
	dashboard_chart_instance.create_people_count_chart();
	dashboard_chart_instance.create_age_group_chart();
});
// peoplecount line chart end here