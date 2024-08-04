window.onload = function() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Truffle Risotto ', 'Lobster Thermidor', 'Gourmet Macarons', 'Beef Wellington'],
            datasets: [{
                data: [60, 12,8, 30],
                backgroundColor: ['#92982f', '#36A2EB', '#b129af', '#b43e4c'],
                hoverBackgroundColor: ['#92982f', '#36A2EB', '#b129af', '#b43e4c']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
 
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