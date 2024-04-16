document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the post content
    var postContent = document.getElementById('post-content').value;
    
    // Create a new post element
    var postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = '<div class="post-content">' + postContent + '</div>';
    
    // Append the post to the post container
    document.getElementById('post-container').appendChild(postElement);
    
    // Clear the post form
    document.getElementById('post-content').value = '';
});