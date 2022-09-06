
const newPotluckHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#potluck-title').value.trim();
  const description = document.querySelector('#potluck-description').value.trim();
  const startDate = document.getElementById('start-date').value.trim();
  const endDate = document.getElementById('end-date').value.trim();
  const user_id = 2;

  // const potluck_id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  //   ];


  if ( name && description ) {
    // alert('this is working');
      const response = await fetch('/api/potluck', {
          method: 'POST',
          body: JSON.stringify({ name, description, startDate, endDate, user_id }),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert('Failed to add potluck!');
      }
  }

  // alert('this is working');
};


  
document.querySelector('.new-potluck-form').addEventListener('submit', newPotluckHandler);
  






