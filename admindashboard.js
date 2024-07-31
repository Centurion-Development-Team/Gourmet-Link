window.onload = function() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Legend 1', 'Legend 2', 'Legend 3'],
            datasets: [{
                data: [5, 10, 15],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Generate custom legend
    var legend = pieChart.generateLegend();
    document.getElementById('chartLegend').innerHTML = legend;

    document.getElementById('moreOptionsBtn').addEventListener('click', function() {
        var options = document.getElementById('options');
        if (options.style.display === 'none' || options.style.display === '') {
            options.style.display = 'block';
            this.style.display = 'none';
        } else {
            options.style.display = 'none';
            this.style.display = 'block';
        }
    });
};