document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (name === '' || email === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
  
    window.location.href = 'todo.html';
  });
  