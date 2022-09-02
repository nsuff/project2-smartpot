

const testCommentFunction = async (event) => {
    event.preventDefault();

    // const name = document.querySelector('#new-comment-text').value.trim();
    // const description = document.querySelector('#new-food-description').value.trim();

    // if (name && description) {
    //     const response = await fetch('/api/foods', {
    //         method: 'POST',
    //         body: JSON.stringify({ name, description }),
    //         headers: { 'Content-Type': 'application/json'},
    //     });

    //     if (response.ok) {
    //         document.location.reload();
    //     } else {
    //         alert('Failed to add food!');
    //     }
    // }

    alert('this is working');
};



document.querySelector('.new-comment-form').addEventListener('submit', testCommentFunction);