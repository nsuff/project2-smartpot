async function deleteCommentHandler(event) {
    event.preventDefault();
  
    const sesh = document.getElementById('sessionuser').innerHTML;
    const comment_user = document.getElementById('comment-user').innerHTML;
    const comment_id = document.getElementById('comment-id').innerHTML;
    const comment_potluck = document.getElementById('potluck-id').innerHTML;
    const pid = String(comment_potluck);
    const link = '/potluck/'+pid;

    const id = String(comment_id);
    if (sesh === comment_user) {
      
    
      var response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
      });

      //alert('this is working')
    } else if (sesh != comment_user) {
        alert('You cannot delete this comment!')
    }
  
    if (response.ok) {
      document.location.replace(link);
      //history.go();
      //window.location=document.referrer;
    } else {
      alert(response.statusText);
    }
    //history.back();
    //alert('this is working');
}
  
document.getElementById('delete-btn').addEventListener('click', deleteCommentHandler);
