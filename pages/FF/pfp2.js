window.onload = function() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gourmet Burgers', 'Sushi Rolls', 'Spaghetti Carbonara', 'BBQ Ribs'],
            datasets: [{
                data: [40, 12, 35, 44],
                backgroundColor: ['#25da62', '#18b8cd', '#d614d3', '#e09e11'],
                hoverBackgroundColor: ['#25da62', '#18b8cd', '#d614d3', '#e09e11']
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