export const retrieveProjects = async () => {
    try {
        const response = await fetch('/api/project', {
            method: 'GET', // Specify the HTTP method as GET
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
