export const deleteProjectRequest = async (id) => {
  try {
    const response = await fetch(`/api/projects/delete/${id}`, {
      method: 'DELETE', // Specify the HTTP method as GET
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert("Deleted Succesfully")
    window.location.reload()
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default deleteProjectRequest


