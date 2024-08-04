window.onload = function() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gingerbread man', 'Chocolate', 'Cheesecake Brownies', 'Milkshakes'],
            datasets: [{
                data: [65, 35, 15, 12],
                backgroundColor: ['#d66305', '#7f4225', '#f3c600', '#fbd4c4'],
                hoverBackgroundColor: ['#d66305', '#7f4225', '#f3c600', '#fbd4c4']
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