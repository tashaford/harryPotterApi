var BarChart = function(list){
  var container = document.getElementById('bar-chart');
  var chart = new Highcharts.Chart({
    chart: {
      backgroundColor: '#542d5c',
      height: 400,
      width: 500,
      type: 'column',
      renderTo: container,
      style: {
        fontFamily: 'Cinzel',
        fontSize: '20px',
        color: 'goldenrod'
      }
    },
    title: {
      text: "Number of pupils and professors",
      style: {color: 'goldenrod', fontSize:'25px'}
    },
    plotOptions: {column:{colorByPoint: true}},
    series: [{
      name: "Hogwarts",
      data: list 
    }],
    xAxis: {
      categories: ["Pupils", "Professors"],
      labels: {
        style: {
          color: 'goldenrod',
          fontSize:'20px'
        }
      }
    },
    yAxis: {
      tickInterval: 2,
      title: {text: "Number of wizards", style: {color: 'goldenrod', fontSize:'20px'}},
      labels: {
        style: {
          color: 'goldenrod',
          fontSize:'15px'
        }
      }
    },
    colors: ['#5d5d5d', 'Ravenclaw Gold'],
  })
}