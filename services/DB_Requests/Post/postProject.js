
const postProject = async (formData) => {
    try {
        const response = await fetch('/api/projects', {
            method: 'POST', // Specify the HTTP method as GET
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Convert the JSON object to a string
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }

}

export default postProject