async function createAccount(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
                twitter,
                github
            }),
            headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
            console.log(`Account for ${username} has been created!`);
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', createAccount);