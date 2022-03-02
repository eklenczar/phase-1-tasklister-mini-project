// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in 
// the DOM after the submit button has been activated.


const form = document.getElementById('create-task-form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    //Does the submit work?
    console.log('Ive been submitted')
    //Yes
    //Did you grab the field and log it's value?
    const inputField = document.getElementById('new-task-description').value
    console.log(inputField)
    //Yes
    //Did you create a <li>?
    const li = document.createElement('li')
    //Yes
    //
    li.textContent = inputField
    const tasks = document.getElementById('tasks')
    console.log(tasks)
    tasks.append(li)


    
})

