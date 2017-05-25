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

	this.create_demographics_chart = function(){
		try{
			//code to populate chart goes here
			console.log('demographics chart executed successfully!');
			Highcharts.chart('demographics', {
				exporting:{
					enabled: false
				},
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				title: {
					text: 'Peoples Demographics'
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.percentage:.1f} %',
							style: {
								color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
							}
						}
					}
				},
				series: [{
					name: 'Count',
					colorByPoint: true,
					data: [{
						name: 'Female',
						y: 56.33
					}, {
						name: 'Male',
						y: 24.03,
						sliced: true,
						selected: true
					}]
				}]
			});

		}
		catch(err){
			console.log(`DashboardCharts::create_demographics_chart:${err.message}`);
		}
	};

	this.create_emotions_chart = function(){
		try{
			//code to populate chart goes here
			console.log('emotions chart executed successfully!');
			Highcharts.chart('emotions', {
				exporting:{
					enabled: false
				},
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				title: {
					text: 'Peoples Emotions'
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.percentage:.1f} %',
							style: {
								color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
							}
						}
					}
				},
				series: [{
					name: 'Count',
					colorByPoint: true,
					data: [{
						name: 'Anger',
						y: 50.33
					}, {
						name: 'Neutral',
						y: 20.03,
						sliced: true,
						selected: true
					}, {
						name: 'Happiness',
						y: 10.38
					}, {
						name: 'Sadness',
						y: 4.77
					}, {
						name: 'Content',
						y: 0.91
					}, {
						name: 'Surprise',
						y: 0.2
					},{
						name: 'Disgust',
						y: 4.0
					},
					{
						name: 'Fear',
						y: 6.0
					}]
				}]
			});

		}
		catch(err){
			console.log(`DashboardCharts::create_emotions_chart:${err.message}`);
		}
	};
};  

$(document).ready(function(){
	//code to populate chart goes here
	var dashboard_chart_instance = new DashboardCharts();
	dashboard_chart_instance.create_people_count_chart();
	dashboard_chart_instance.create_age_group_chart();
	dashboard_chart_instance.create_demographics_chart();
	dashboard_chart_instance.create_emotions_chart();
});
// peoplecount line chart end here