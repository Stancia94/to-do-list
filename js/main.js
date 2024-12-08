const inputTaskTextElement = document.querySelector('.input')
const submitButton = document.getElementById('submitTask')
const formTask = document.forms.formTask
const listTask = document.querySelector('.list')



function createTask( inputTaskTextElement){
  console.log( inputTaskTextElement.value)
  inputTaskTextElement.preventDefault()

}
formTask.addEventListener('submit', createTask)

// formTask.addEventListener('submit', (event) => {

//   const newTask = document.createElement('div')
//   newTask.classList.add('list__task')

//   const newCheckbox = document.createElement('input')
//   newCheckbox.type = 'checkbox'
//   newCheckbox.classList.add('checkbox-task', 'list__checkbox')
  
//   const newCheckboxLabel = document.createElement('label')
//   newCheckboxLabel.append(newCheckbox)
//   newCheckboxLabel.classList.add('checkbox-label', 'list__label')
//   newTask.append(newCheckboxLabel)

//   const newTaskInner = document.createElement('p')
//   newTaskInner.innerHTML = inputTaskTextElement.value
//   newTask.append(newTaskInner)

//   listTask.append(newTask)

//   inputTaskTextElement.value = ''
//   event.preventDefault()
// })