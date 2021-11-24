
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    const alert = document.querySelector('.alert');
    alert.remove();
})



const notBtn = document.querySelector('.bell-btn');
const dropdown = document.querySelector('.dropdown');
notBtn.addEventListener('click', () => {
    
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'initial'
    } else {
        dropdown.style.display = 'none';
    }
})

let hourlyChart = document.getElementById('hourly-chart').getContext('2d');
const hourlyBtn = document.querySelector('.hourly');

hourlyBtn.addEventListener('click', () => {

    let hourlyChartFunc = new Chart(hourlyChart, {
        type: 'line',
        data: {
            labels: ['0-4', '4-8', '8-12', '12-16', '16-20', '20-24'],
            datasets: [{
                label: '',
                data: [
                    15,
                    32,
                    58,
                    67,
                    79,
                    52
                ],
                backgroundColor: '#7b79f7',
                borderColor: '#3b3a68',
                fill: true
            },
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })

})


