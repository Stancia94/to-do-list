export let completedTask = [];
export class CheckListItem {
  title;
  itemEl;
  content = null;
  checked = false;

  constructor(content, title) {
    this.content = content || 'Новое дело';
    this.title = title || '№';
  }

  set titleValue(title) {
    this.title = title;
    if (!!this.itemEl) {
      this.updateRender();
    }
  }

  get titleValue() {
    return this.title;
  }

  updateRender() {
    this.itemEl.querySelector('span').textContent = this.title;
    this.itemEl.querySelector('p').textContent = this.content;
    this.itemEl.id = `checkListItem-${this.title}`;
  }

  delete(complete) {
    if (complete == true) {
      completedTask.push(this);
      this.itemEl.remove();
    } else {
      this.title = null;
      this.content = null;
      this.checked = false;
      this.itemEl.remove();
      this.itemEl = null;
    }
  }


  render(containerEl) {
    const itemEl = document.createElement('div');
    itemEl.id = `checkListItem-${this.title}`

    itemEl.innerHTML =
      `<div class="list__task">
        <span>${this.title}</span>
            <label class="checkbox-label list__label">
              <input type="checkbox" class="list__checkbox checkbox-task">
            </label>
        <p>${this.content}</p>
      </div>`
    this.itemEl = itemEl;
    const checkBox = itemEl.querySelector('.checkbox-task')
    checkBox.addEventListener('change', () => this.checked = checkBox.checked)

    containerEl.append(itemEl);
  }

}