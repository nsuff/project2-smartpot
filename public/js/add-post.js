async function newFormHandler(event) {
    event.preventDefault();
  
    // console.log("This works to here");

    // const content = document.querySelector('input[name="post-title"]').value;
    
  
    // const response = await fetch(`/api/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     content,
    //     potluck_id,
    //     user_id
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
  
  
    const content = document.querySelector('textarea[name="comment-body"]').value.trim();
    const potluck_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          potluck_id,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }




  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  