var PieChart = function(houses){
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({
    chart: {
      backgroundColor: '#542d5c',
      height: 400,
      width: 720,
      type: 'pie',
      renderTo: container,
      style: {
        fontFamily: 'Cinzel',
        fontWeight: 'bold'
      }
    },
    title: {
      text: "Number of students in Houses",
      style: {color: 'goldenrod', fontSize:'25px'}
    },
    series: [{
      name: "Houses",
      data: [
      {
        name: "Gryffindor",
        y: houses[0],
        dataLabels : {style: {color: '#ae0001', fontSize:'20px', fontWeight: "bold", textOutline: "1px"}},
        color: {
          radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
              stops: [
          [0, '#ae0001'],
          [1, '#740001']
          ]
        },
        sliced: true
      },
      {
        name: "Hufflepuff",
        y: houses[1],
        dataLabels : {style: {color: '#ecb939', fontSize:'20px', fontWeight: "bold", textOutline: "1px"}},
        color: {
          radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
              stops: [
          [0, '#f0c75e'],
          [1, '#ecb939']
          ]
        },
      },
      {
        name: "Ravenclaw",
        y: houses[2],
        dataLabels : {style: {color: '#222f5b', fontSize:'20px', fontWeight: "bold", textOutline: "1px"}},
        color: {
          radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
              stops: [
          [0, '#222f5b'],
          [1, '#0e1a40']
          ]
        },
      },
      {
        name: "Slytherin",
        y: houses[3],
        dataLabels : {style: {color: '#2a623d', fontSize:'20px', fontWeight: "bold", textOutline: "1px"}},
        color: {
          radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
              stops: [
          [0, '#2a623d'],
          [1, '#1a472a']
          ]
        },
      }
      ]
    }]
  });
}