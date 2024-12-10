
const headerDate = document.querySelector('.header__date')
function updateDate() {
  let time = new Date()
  let innerDate = `<p>${time.toLocaleDateString()}</p>`
  let innerTime = `<p>${time.toLocaleTimeString()}</p>`
  headerDate.innerHTML = innerDate
  headerDate.innerHTML += innerTime
}
updateDate()
setInterval(updateDate, 1000)

const createCheckListButton = document.querySelector('.button-create')
const mainArea = document.querySelector('.main')
createCheckListButton.addEventListener('click', () => {
  mainArea.append(new CheckList().renderCheckList())
})

class CheckList {
  amountItem = []
  list

  constructor() {
    console.log('checklist появился');
  }

  removeItem(data) {
    this.amountItem = this.amountItem.filter(element => element.content != data)
  }

  addItem(content) {
    const checkListItem = new CheckListItem(content)
    this.amountItem.push(checkListItem)
    console.log('В чек лист добавилось новое задание');
    this.createItem()
  }

  createItem() {
    const lastListItem = this.amountItem.at(-1)
    this.list.append(lastListItem.renderItem())
    console.log(this.amountItem);
  }

  renderCheckList() {

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
      this.addItem(entryElement.value)
      event.preventDefault()
    })

    entryForm.append(entryElement)
    entryForm.append(buttonSubmit)
    list.append(entryForm)

    this.list = list
    return list
  }

}

class CheckListItem {
  content
  state = false

  constructor(content) {
    this.content = content
  }

  setState(newState) {
    this.state = newState
  }

  renderItem() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('list__task')

    const amountListItem = document.createElement('span')

    const labelCheckBox = document.createElement('label')
    labelCheckBox.classList.add('checkbox-label', 'list__label')

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.classList.add('list__checkbox', 'checkbox-task')

    checkBox.addEventListener('change', () => {
      this.setState(checkBox.checked)
    })

    const content = document.createElement('p')
    content.textContent = this.content

    wrapper.append(amountListItem)
    labelCheckBox.append(checkBox)
    wrapper.append(labelCheckBox)
    wrapper.append(content)

    return wrapper
  }

}
