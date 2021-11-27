/* alert window */

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    const alert = document.querySelector('.alert');
    alert.remove();
})

/* notifications */

const notBtn = document.querySelector('.bell-btn');
const dropdown = document.querySelector('.dropdown');
notBtn.addEventListener('click', () => {
    
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'initial'
    } else {
        dropdown.style.display = 'none';
    }
})

/* line charts */

let lineChart = document.getElementById('line-chart').getContext('2d');
const chartsNav = document.querySelector('.charts-nav');

let myChart = new Chart(lineChart, {
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
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
})



function updateChart(newChart) {
    myChart.data.labels = newChart.labels;
    myChart.data.datasets[0].data = newChart.data;
    myChart.update();
}

function updateButtons(active) {
    const btns = document.querySelectorAll('.charts-nav button');
    for (i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = 'white';
        btns[i].style.color = 'black';
    }
    
    active.style.backgroundColor = 'rgb(130, 230, 130)';
    active.style.color = 'white';
}



const hourlyChart = {
    labels: ['0-4', '4-8', '8-12', '12-16', '16-20', '20-24'],
    data: [15, 32, 58, 67, 79, 52]
};

const dailyChart = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [272, 231, 254, 232, 267, 162, 89]
};

const weeklyChart = {
    labels: ['1-7', '8-14', '15-21', '22-28'],
    data: [1674, 1535, 1612, 1581]
};

const monthlyChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [6432, 6112, 5894, 6256, 6095, 5617, 5741, 6284, 6134, 6487, 6579, 6138] 
};



chartsNav.addEventListener('click', (e) => {
    const btn = e.target;
    

    
    if (btn.className === 'hourly') {
        updateButtons(btn);
        updateChart(hourlyChart);
    } else if (btn.className === 'daily') {
        updateButtons(btn);
        updateChart(dailyChart);
    } else if (btn.className === 'weekly') {
        updateButtons(btn);
        updateChart(weeklyChart); 
    } else if (btn.className === 'monthly') {
        updateButtons(btn);
        updateChart(monthlyChart); 
    }

})


/* bar chart */

let barChart = document.getElementById('bar-chart').getContext('2d');

let myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: '',
            data: [
                272, 231, 254, 232, 267, 162, 89
            ],
            backgroundColor: '#7b79f7',
            borderColor: '#3b3a68',
            fill: true
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
})

/* pie chart */

let pieChart = document.getElementById('pie-chart').getContext('2d');

let myPieChart = new Chart(pieChart, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            label: '',
            data: ['311', '98', '74'],
            backgroundColor: ['#7b79f7','rgb(130, 230, 130)', 'rgb(130, 230, 217)'],
            fill: true
        },
        ]
    },
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
})

/* message user */

const members = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const userSearch = document.querySelector('.user-searchbox');
const searchList = document.querySelector('.search-list');
const message = document.querySelector('.message');
const submit = document.querySelector('.send');
let suggestions = [];

function removeSuggestions() {
    while (searchList.firstChild) {
        searchList.removeChild(searchList.firstChild);
    }
    searchList.style.display = 'none';
}

userSearch.addEventListener('input', (e) => {
    
    let userInput = e.target.value.toLowerCase();
    
    removeSuggestions();

    suggestions = members.map((name) => {
        if (name.toLocaleLowerCase().includes(userInput)) {
            return name;
        }
    } );

    for (i = 0; i < suggestions.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = suggestions[i];
        searchList.append(newLi);
        searchList.style.display = 'inline-block';
    }

    if (userInput === '') {
        removeSuggestions();
    }


})

searchList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        userSearch.value = e.target.textContent;
        searchList.style.display = 'none';
    }
})




/* submit.addEventListener('click', () => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'alert';
    if (message.value && members.includes(userSearch.value)) {
        
    } else {
        alert('You need to select a user and write a message')
    }
})
 */