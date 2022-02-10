document.addEventListener("DOMContentLoaded", () => {

const newForm = document.getElementById('create-task-form')
const toDos = document.getElementById('tasks')

newForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputValue = event.target.children[1].value;
  
  let newLI = document.createElement('li');
  toDos.appendChild(newLI)
  newLI.textContent = inputValue
  })
});





// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in 
// the DOM after the submit button has been activated.

