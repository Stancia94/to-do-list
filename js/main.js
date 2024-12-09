
function setCurrentTime() {
  const headerDate = document.querySelector('.header__date')
  setInterval(() => {
    let time = new Date()
    let innerDate =
      `<p>${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} </p>
    <p>${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}</p>`
    headerDate.innerHTML = innerDate
  }, 1000)
}
setCurrentTime()
function createTask(event) {

  const newTask = document.createElement('div')
  newTask.classList.add('list__task')

  const newCheckbox = document.createElement('input')
  newCheckbox.type = 'checkbox'
  newCheckbox.classList.add('checkbox-task', 'list__checkbox')

  const newCheckboxLabel = document.createElement('label')
  newCheckboxLabel.append(newCheckbox)
  newCheckboxLabel.classList.add('checkbox-label', 'list__label')
  newTask.append(newCheckboxLabel)

  const newTaskInner = document.createElement('p')

  newTaskInner.textContent = event.target[0].value
  newTask.append(newTaskInner)

  const list = event.target.closest('.list')

  list.append(newTask)
  event.target[0].value = ''

  event.preventDefault()
}

document.body.addEventListener('submit', (event) => {
  if (event.target.classList.contains('list__entry')) {
    createTask(event)
    event.preventDefault()
  }
})


class List {
  static amountList = 0;
  constructor() {
    this.createList()
    this.amountList++
  }
  createList() {
    const newList = document.createElement('div')
    newList.classList.add("main__list", "list")
    const newEntry = document.createElement('form')
    newEntry.classList.add("list__entry")
    newEntry.setAttribute('id', 'formTask')
    const newTextArea = document.createElement('textarea')
    newTextArea.setAttribute("rows", "1")
    newTextArea.setAttribute("spellcheck", "true")
    newTextArea.setAttribute("type", "text")
    newTextArea.setAttribute("placeholder", "add task")
    newTextArea.setAttribute("required", "")
    newTextArea.classList.add("list__input", "input")
    const newButton = document.createElement('button')
    newButton.textContent = 'add'
    newButton.setAttribute("id", "submitTask")
    newButton.setAttribute("type", "submit")
    newButton.classList.add("button-default")
    newEntry.append(newTextArea)
    newEntry.append(newButton)
    newList.append(newEntry)
    document.querySelector('.main').append(newList)
  }
}
const buttonCreateNewList = document.querySelector('.button-create')
buttonCreateNewList.addEventListener('click', () => new List())