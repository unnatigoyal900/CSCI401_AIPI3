const username = sessionStorage.getItem('username');

fetch(`http://localhost:3000/get_survey/${username}`)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(surveyResults => {
    console.log(surveyResults);
	if(!Array.isArray(surveyResults)){
		surveyResults = [surveyResults];
	}

    const datasets = surveyResults.map((result, index) => {
        return {
            label: `Survey ${index + 1}`,
            data: [result.customer, result.ops_cult, result.strategy, result.technology, result.operations],
            borderWidth: 1
        };
    });

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Customer', 'Operations and Culture', 'Strategy', 'Technology', 'Operations'],
            datasets: datasets
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
})
.catch(e => {
    console.log('There was a problem with your fetch operation: ' + e.message);
});
