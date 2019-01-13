const DOGurl = 'https://dog.ceo/api/breeds/image/random';

window.onload = function() {
  setDate();
  createChart();
}

function setDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  if (dd<10) dd = '0'+dd;
  if (mm<10) mm = '0'+mm;
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("today").innerHTML = today;
}

function createChart() {
  var chartEl = document.getElementById('reportChart');
  if (!chartEl) {
    return;
  }

  new Chart(chartEl.getContext('2d'), {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
    data: fakeData(),
    options: {
      title: {
        display: true,
        text: 'My Report'
      },
      scales: {
        xAxes: [{
                type: 'time',
                time: {
                  displayFormats: {
                      day: 'MMM DD'
                  },
                  unit: 'day'
                }
            }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function changeImage() {
	fetch(DOGurl).then((response) => {
		return response.json();
	})
	.then((response) => {
		console.log(response)
		document.getElementById('dog').setAttribute("src", response['message']);
	})
	.catch(function(){

	})
}

const fakeData = () => {
  // Format seven days worth of labels
  let labelRes = []
  for (let i = 0; i <= 6; i++) {
    labelRes.push(moment().add("days", i).format("MMM DD"))
  }

  return {
    labels: labelRes,
    datasets: [{
        data: [10, 10, 15, 27, 38, 34, 40],
        label: "How you felt",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
}
