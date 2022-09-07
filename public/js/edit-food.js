async function editFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#edit-food-name').value.trim();
    const description = document.querySelector('#edit-food-description').value.trim();

    const sesh = document.getElementById('sessionuser').innerHTML;
    const food_user = document.getElementById('fooduser').innerHTML;
    const food_potluck = document.getElementById('foodpotluck').innerHTML;
    const pid = String(food_potluck);
    const link = '/potluck/'+pid;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    //alert(sesh + '  ' + food_user + '  ' + food_potluck);
    if (sesh === food_user) {
      
      if (name) {
        
      
        var response = await fetch(`/api/foods/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ name, description }),
          headers: { 'Content-Type': 'application/json'},
        });
      }
      
    } else if (sesh != food_user) {
      alert('You cannot edit a food you did not make!')
    }
  
    if (response.ok) {
      document.location.replace(link);
    } else {
      alert(response.statusText);
    }
    //alert('this is working');
}
  
document.getElementById('edit-btn').addEventListener('click', editFormHandler);
  