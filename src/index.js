import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';
import refresh from './assets/refresh.jpg';
import Task from './modules/taskAdd.js';

const inputEnter = document.querySelector('.task-input');
const enterBtn = document.querySelector('.enter-icon');
const clearBtn = document.querySelector('.clearBtn');

document.querySelector('.refresh-icon').setAttribute('src', refresh);

clearBtn.addEventListener('click', () => {
  const selectCompleted = document.querySelectorAll('.completed');
  selectCompleted.forEach((each) => each.remove());
  Task.clearAllCompleted();
  localStorage.setItem('tasks', JSON.stringify(Task.taskArr));
});

inputEnter.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (inputEnter.value) {
      const taskItem = new Task(uuidv4(), inputEnter.value, Task.taskArr.length + 1, false);
      Task.taskArr.push(taskItem);
      taskItem.add();
      inputEnter.value = '';
      localStorage.setItem('tasks', JSON.stringify(Task.taskArr));
    }
  }
});

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputEnter.value) {
    const taskItem = new Task(uuidv4(), inputEnter.value, Task.taskArr.length + 1, false);
    Task.taskArr.push(taskItem);
    taskItem.add();
    inputEnter.value = '';
    localStorage.setItem('tasks', JSON.stringify(Task.taskArr));
  }
});
