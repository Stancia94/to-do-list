
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


const mainArea = document.querySelector('.main')
const buttonCreateNewList = document.querySelector('.button-create')
buttonCreateNewList.addEventListener('click', () => {
  const checkList = new CheckList()
  mainArea.append(checkList.renderCheckListItem())
})


// new CheckList()        // записка
// CheckList().amountItem // количество задач

// CheckList().removeItem // удаление задачи 

// CheckList().addItem    // добавление задачи 


// new CheckListItem()    // задача

// CheckListItem().content // наполнение задачи


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

  renderCheckListItem() {

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

// const newlist = new CheckList()
// console.log(newlist.amountItem);
// newlist.addItem('hello')
// newlist.addItem('hello!')
// newlist.addItem('hello!')
// newlist.addItem('hello!')
// newlist.addItem('hello!')
// newlist.removeItem('hell')

