import { CheckList } from "./class/CheckList.js";

function updateDate() {
  let time = new Date()
  let innerDate = `<p>${time.toLocaleDateString()}</p>`
  let innerTime = `<p>${time.toLocaleTimeString()}</p>`
  headerDate.innerHTML = innerDate
  headerDate.innerHTML += innerTime
}
const headerDate = document.querySelector('.header__date')
updateDate()
setInterval(updateDate, 999)

let counter = 0;

function addCheckList(area) {
  counter++;
  // по клику создаешь новый контейнер под список
  const contEl = document.createElement('div');
  contEl.id = 'checklist-' + counter;
  const list = new CheckList('Мой новый список дел номер ' + counter);
  list.render(contEl);
  area.append(contEl);
}

const createCheckListButton = document.querySelector('.button-create')
const mainArea = document.querySelector('.main')

createCheckListButton.addEventListener('click', () => addCheckList(mainArea))


//добавить возможность удалять листы и удалять задачи, перетаскивать заметки, менять их порядок,
//добавить слева панель для изменения цвета интерфейса
//добавить окно с погодой на сегодня
//возможность растягивания заметок
//добавить кэширование информации 
