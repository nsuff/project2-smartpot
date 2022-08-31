

const newFoodFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#food-name').value.trim();
  const description = document.querySelector('#food-description').value.trim();
  console.log(name);
  console.log(description);
  

  if (name && description) {
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
