const apiUrl = 'https://6m2c753lrh.execute-api.us-east-2.amazonaws.com/CountVisitor';

async function visitAPI() {
    try {
        // Make a POST request to your API Gateway endpoint
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "visitor_id": "1"
            }),
        });

        // Check if the request was successful (status code 2xx)
        if (response.ok) {
            // Parse the response JSON
            const result = await response.json();
            console.log('Database value:', result);

            // Update the content of the dataContainer div with the fetched value
            document.getElementById('dataContainer').innerText = result.view_count;
        } else {
            // Handle errors
            console.error('Error:', response.statusText);
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the testApi function when the webpage is loaded
document.addEventListener('DOMContentLoaded', visitAPI);

