async function deleteFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#edit-food-name').value.trim();
    const description = document.querySelector('#edit-food-description').value.trim();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if (1 === 1) {
      
    
      const response = await fetch(`/api/foods/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json'},
      });

      
    }
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    //alert('this is working');
}
  
document.getElementById('edit-btn').addEventListener('click', deleteFormHandler);
  