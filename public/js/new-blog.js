async function createBlog(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const blog_content = document.querySelector('#post-content').value;
  
    if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({
                title,
                blog_content
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
  
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
    }
  }
  
  document.querySelector('#create-post-form').addEventListener('submit', createBlog);