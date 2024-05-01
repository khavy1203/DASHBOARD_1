const chart = document.querySelector("#chart").getContext('2d');
console.log(chart);
//create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fed', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29371, 23443, 22144, 53434, 65543, 22343, 443443, 34344, 65543, 22343, 44344, 34344],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [34999, 23442, 22142, 1, 65543, 22343, 443443, 34344, 65543, 22343, 44343, 34344],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

// Show or hide sidebar 
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

// Function to show sidebar
function showSidebar() {
    sidebar.style.display = 'block';
}

// Function to hide sidebar
function hideSidebar() {
    sidebar.style.display = 'none';
}

// Event listener for menu button
menuBtn.addEventListener('click', () => {
    showSidebar();
});

// Event listener for close button
closeBtn.addEventListener('click', () => {
    hideSidebar();
});

// Event listener for window resize
window.addEventListener('resize', () => {
    // Check if screen width is less than 1024px
    if (window.innerWidth < 1024) {
        // If screen width is less than 1024px, show sidebar
        hideSidebar();
        
    } else {
        showSidebar();
    }
});