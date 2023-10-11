export const deleteProjectRequest = async ({ id, purpose }) => {
  try {
    const response = await fetch('/api/projects', {
      method: 'POST', // Specify the HTTP method as GET
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, purpose }), // Convert the JSON object to a string
      purpose: "Add-Project"
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

export default deleteProjectRequest


