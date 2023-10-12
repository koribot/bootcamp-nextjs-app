export const retriveProjectRequest = async () => {
    try {
        const response = await fetch('/api/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
            return null
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default retriveProjectRequest
