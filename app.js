
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

let lineChart = document.getElementById('line-chart').getContext('2d');
const chartsNav = document.querySelector('.charts-nav');

function hourlyChartFunc() {
    let hourlyChart = new Chart(lineChart, {
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
    return hourlyChart;
}

function dailyChartFunc() {
    let dailyChart = new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: '',
                data: [
                    272,
                    231,
                    254,
                    232,
                    267,
                    162,
                    89
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
}

/* hourlyChartFunc(); */

chartsNav.addEventListener('click', (e) => {
    const btn = e.target;
    const btns = document.querySelectorAll('.charts-nav button');
    const canvas = document.querySelector('#line-chart');
    
    if (btn.className === 'hourly') {
        for (i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = 'white';
            btns[i].style.color = 'black';
        }
        
        btn.style.backgroundColor = 'rgb(130, 230, 130)';
        btn.style.color = 'white';
        canvas.innerHTML = hourlyChartFunc();
    } else if (btn.className === 'daily') {
        for (i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = 'white';
            btns[i].style.color = 'black';
        }
        
        btn.style.backgroundColor = 'rgb(130, 230, 130)';
        btn.style.color = 'white';
        dailyChartFunc();
    }

})


