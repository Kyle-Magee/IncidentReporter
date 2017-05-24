window.onload = function() {
    var ctx = document.getElementById("incidentchart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gen_labels(),
            datasets: [{
                label: 'Incidents',
                data: gen_data(),
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                    }
                }]
            }
        }
    });
};

var items = ['dates', 'locations']
for (index_ = 0; index_ < 2; index_++) {
    if (!localStorage[items[index_]]) {
        localStorage[items[index_]] = JSON.stringify(['nAn']);
    };
}

var yLabels = {
    20: 'relapse',
}

function add() {
    var report = document.getElementById('report');
    var relapse_time = new Date();
    stored_relapses = JSON.parse(localStorage['dates']);
    stored_relapses.push(relapse_time)
    localStorage['dates'] = JSON.stringify(stored_relapses)
    x = JSON.parse(localStorage['locations']);
    update_incident(x, report, 'locations');
    location.reload();
}

function update_incident(x, report, datapoint) {
    x.push(report[datapoint].value);
    localStorage[datapoint] = JSON.stringify(x);
}

function gen_labels() {
    stored_relapses = JSON.parse(localStorage['dates']);
    console.log(stored_relapses);
    return JSON.parse(localStorage['dates'])
};

function gen_data() {
    stored_relapses = JSON.parse(localStorage['locations']);
    console.log(stored_relapses);
    return JSON.parse(localStorage['locations'])
};

