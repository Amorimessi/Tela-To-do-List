// Carrega e renderiza as tarefas
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach(function(task, index) {
      const li = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
      });
  
      const span = document.createElement('span');
      span.textContent = task.text;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remover';
      deleteButton.addEventListener('click', function() {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Adiciona nova tarefa
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text === '') return;
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: text, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    taskInput.value = '';
    loadTasks();
  });
  
  // Inicializa
  loadTasks();
  