let trafficCtx = document.getElementById('traffic-chart').getContext('2d');
let trafficChart = new Chart(trafficCtx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["10-15", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-9", "9-16"],
        datasets: [{
            label: '',
            borderColor: '#aaa3e6',
            borderWidth: 1,
            borderJoinStyle: 'round',
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2,
            data: [500, 900, 1000, 500, 1200, 2000, 1100, 2200, 2500, 1800],
            fill: 'start',
            backgroundColor: 'rgba(227, 225, 247, .5)'
        }]
    },
    // Configuration options go here
    options: {
       legend: {
          display: false
       },
       scales: {
         xAxes: [{
           ticks: {
            //  labelOffset: -20,
           },
         }],
         yAxes: [{
            ticks: {
                max: 3000,
                min: 500,
                stepSize: 500
            }
        }],

       },
       animation: {
         duration: 0
       },
    }
});

let dailyCtx = document.getElementById('daily-traffic-chart').getContext('2d');
let dailyChart = new Chart(dailyCtx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ["S", 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: "#786fc1",
        }],
    },
    // Configuration options go here
    options: {
       legend: {
          display: false
       },
       animation: {
         duration: 0
       }
    }
});

let mobileCtx = document.getElementById('mobile-users-chart').getContext('2d');
let mobileChart = new Chart(mobileCtx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Phones", 'Tablets', 'Desktop'],
        datasets: [{
            data: [24, 16, 70],
            backgroundColor: [
              '#66d18f',
              '#64b4c1',
              '#786fc1'
            ],
            borderWidth: [0, 0, 0],
        }],
    },
    // Configuration options go here
    options: {
      cutoutPercentage: 55,
      rotation: -0.55*Math.PI,
      legend: {
        display: true,
        position: 'right',
        labels : {
          fontSize: 40,
        }
      },
      animation: {
        animateRotate: false
      },
      responsive: false,
      maintainAspectRatio: true,
    },
});
