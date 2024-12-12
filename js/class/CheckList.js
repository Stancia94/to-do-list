import { CheckListItem } from "./CheckListItem.js";
export class CheckList {
  title = null;
  items = [];
  list;

  constructor(title, items) {
    this.title = title || 'New list';
    this.items = items || [];
  }

  addItem(item) {
    this.items.push(item);
    if (!!this.list) {
      item.render(this.list);
    }
  }

  updateItemTitle() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].titleValue = i + 1;
    }
  }

  updatesItems() {
    this.items = this.items.filter(item => item.checked !== true)
    this.updateItemTitle();
  }

  deleteItems() {
    const itemsDelete = this.items.filter(item => item.checked === true)
    for (let i = 0; i < itemsDelete.length; i++) {
      itemsDelete[i].delete();
    }
    this.updatesItems();
  }

  render(containerEl) {
    const listEl = document.createElement('div');
    listEl.classList.add('main__list', 'list');
    this.list = listEl;
    listEl.innerHTML =
      `<div class="list__title">
          <span class="title">${this.title}</span>
      </div>
      <div class="list__interface">
          <form class="list__entry" id="formTask">
            <textarea rows="1" spellcheck="true" type="text" class="list__input input" placeholder="add task"
              required></textarea>
            <button id="submitTask" type="submit" class="button-default">add</button>
          </form>
          <button class="button-default button-delete">complete all checked</button>
      </div>`

    const buttonDelete = listEl.querySelector('.button-delete')
    buttonDelete.addEventListener('click', () => this.deleteItems())

    const entryForm = listEl.querySelector('.list__entry')
    entryForm.addEventListener('submit', (event) => {
      const checkitem = new CheckListItem(entryForm[0].value, this.items.length + 1)
      this.addItem(checkitem);
      event.preventDefault();
      console.log(this.items);
    })

    for (let i = 0; i < this.items.length; i++) {
      // а тут ты создаешь контейнер под айтем
      const itemContainerEl = document.createElement('div');
      itemContainerEl.id = 'checkListItem-' + (i + 1);
      // добавляешь в него разметку, стили, классы, добавляешь порядковый номер i + 1
      // и передаешь его в render уже айтема
      this.items[i].render(itemContainerEl);
      listEl.append(itemContainerEl)
    }

    // пихаешь отрендереный список в переданный контейнер
    containerEl.append(listEl);
  }

}
