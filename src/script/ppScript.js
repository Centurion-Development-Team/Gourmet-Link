window.onload = function() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Italian Cuisine', 'Japanese Cuisine', 'Indian Cuisine', 'Mexican Cuisine'],
            datasets: [{
                data: [20, 13, 39, 58],
                backgroundColor: ['#ff6384', '#36a2eb', '#4BC0C0', '#ffce56'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#4BC0C0', '#ffce56']
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