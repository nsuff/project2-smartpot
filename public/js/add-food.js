

const newFoodFormHandler = async (event) => {
  event.preventDefault();
  console.log('new food');

  const name = document.querySelector('#username-signup').value.trim();
  const description = document.querySelector('#email-signup').value.trim();
  console.log(name);
  console.log(description);
  

  if (username && email) {
    const response = await fetch('/api/foods', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};



document
  .querySelector('.food-form')
  .addEventListener('submit', newFoodFormHandler);
