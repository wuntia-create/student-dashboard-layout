document.addEventListener('DOMContentLoaded',()=>{
    const todoSection = document.getElementById('todo-Section');
    const form = document.createElement('form');
    form.className = 'd-flex mb-3';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Add new task...';
    input.className = 'form-control me-2';
    input.required = true;
    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-primary';
    button.appendChild(input);
    form.appendChild(button);
    const list = document.createElement('ul');
    list.id = 'todo-list';
    list.className = 'list-group';
    todoSection.appendChild(form);
    todoSection.appendChild(list);
    //Logic for adding tasks
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-sm btn-danger">Delete</button>
        `;
        li.querySelector('button').addEventListener('click',() => li.remove());
        list.appendChild(li);
        input.value = '';
    });
});
// Chart.js - Weekly Progress Line Chart
const ctx = document.getElementById('progresschart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Study Hours',
      data: [2, 3, 1.5, 4, 2.5, 0, 1],
      borderColor: '#42a5f5',
      backgroundColor: 'rgba(66, 165, 245, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#0d47a1'
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Study Progress'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours'
        }
      }
    }
  }
});
