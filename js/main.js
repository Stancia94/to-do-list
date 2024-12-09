
function setCurrentTime() {
  const headerDate = document.querySelector('.header__date')
  let time = new Date()
  let innerDate =
    `<p>${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} </p>
  <p>${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}</p>`
  headerDate.innerHTML = innerDate
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

// document.body.addEventListener('submit', (event) => {
//   if (event.target.classList.contains('list__entry')) {
//     createTask(event)
//     event.preventDefault()
//   }
// })



const buttonCreateNewList = document.querySelector('.button-create')
buttonCreateNewList.addEventListener('click', () => {
  document.querySelector('.main').append(new CheckList().getHTMLElementCheckList())
})

class CheckList {
  amountCheckListItem = []
  constructor() {
  }
  addTask(content) {
    let checkListItem = new CheckListItem(content)
    return checkListItem.renderCheckListItem()
  }
  getHTMLElementCheckList() {
    const list = document.createElement('div')
    list.classList.add('main__list', 'list')

    const entryForm = document.createElement('form')
    entryForm.classList.add('list__entry')
    entryForm.setAttribute('id', 'formTask')

    const entryElement = document.createElement('textarea')
    entryElement.setAttribute('rows', '1')
    entryElement.setAttribute('spellcheck', 'true')
    entryElement.setAttribute('placeholder', 'add task')
    entryElement.setAttribute('required', '')
    entryElement.classList.add('list__input', 'input')
    entryElement.setAttribute('type', 'text')

    const buttonSubmit = document.createElement('button')
    buttonSubmit.setAttribute('id', 'submitTask')
    buttonSubmit.type = 'submit'
    buttonSubmit.classList.add('button-default')
    buttonSubmit.textContent = 'add'

    entryForm.addEventListener('submit', (event) => {
      list.append(this.addTask(entryForm[0].value))
      event.preventDefault()
      this.amountCheckListItem.push(this.addTask(entryForm[0].value))
      console.log(this.amountCheckListItem);
    })

    entryForm.append(entryElement)
    entryForm.append(buttonSubmit)
    list.append(entryForm)

    return list
  }
}

class CheckListItem {
  static amountItem = 0

  static logAmountItem() {
    console.log(this.amountItem)
  }

  constructor(content) {
    this.content = content
    this.state = false
    CheckListItem.amountItem++
  }

  getContent() {
    return this.content
  }

  setContent(newContent) {
    this.content = newContent
  }

  getState() {
    return this.state
  }


  setState(newState) {
    if (typeof (newState) != typeof (Boolean())) {
      console.log("Неправильный тип  данных");
      return
    }
    this.state = newState
  }


  renderCheckListItem() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('list__task')

    const amountListItem = document.createElement('span')

    const labelCheckBox = document.createElement('label')
    labelCheckBox.classList.add('checkbox-label', 'list__label')

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.classList.add('list__checkbox', 'checkbox-task')

    const content = document.createElement('p')
    content.textContent = this.content

    wrapper.append(amountListItem)
    labelCheckBox.append(checkBox)
    wrapper.append(labelCheckBox)
    wrapper.append(content)

    return wrapper
  }

}

const CheckListObj = new CheckList()
document.querySelector('.main').append(CheckListObj.getHTMLElementCheckList())
console.log(CheckListObj.addTask());
console.log(CheckListObj.getHTMLElementCheckList());







