async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="potluck-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/potluck`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        name,
        description,
        startDateTime,
        endDateTime
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  