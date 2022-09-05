async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    if (1 === 1) {
      
    
      const response = await fetch(`/api/foods/${id}`, {
        method: 'DELETE'
      });

      
    }
  
    if (response.ok) {
      document.location.replace('/editfood/');
      //history.go();
      //window.location=document.referrer;
    } else {
      alert(response.statusText);
    }
    //history.back();
    // alert('this is working');
  }
  
  document.getElementById('delete-btn').addEventListener('click', deleteFormHandler);
  