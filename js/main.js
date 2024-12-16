import { CheckList } from "./class/CheckList.js";
import { completedTask } from "./class/CheckListItem.js";
function updateDate() {
  let time = new Date()
  let innerDate = `<p>${time.toLocaleDateString()}</p>`
  let innerTime = `<p>${time.toLocaleTimeString()}</p>`
  headerDate.innerHTML = innerDate
  headerDate.innerHTML += innerTime
};
const headerDate = document.querySelector('.header__date');
updateDate();
setInterval(updateDate, 999);

let counter = 0;

function addCheckList(area) {
  // по клику создаешь новый контейнер под список
  // const contEl = document.createElement('div');
  // contEl.id = 'checklist-' + (CheckList.amountCheckList + 1);
  const list = new CheckList('Мой новый список дел номер ' + (CheckList.amountCheckList + 1));
  // list.render(contEl);
  list.render(area)
}

const createCheckListButton = document.querySelector('.button-create');
const mainArea = document.querySelector('.main');

createCheckListButton.addEventListener('click', () => addCheckList(mainArea));

const openCompletedTask = document.querySelector('.header__complete');
const closecompletedTask = document.getElementById('closeCompletedTask');
const completedTaskModal = document.getElementById('completedTask');

openCompletedTask.addEventListener('click', () => {
  completedTaskModal.showModal();
  for (let i = 0; i < completedTask.length; i++) {
    completedTask[i].render(completedTaskModal);
  }
});

closecompletedTask.addEventListener('click', () => {
  completedTaskModal.close();
});



//добавить возможность` удалять листы и удалять задачи`(complete)
// , перетаскивать заметки, менять их порядок,
//добавить слева панель для изменения цвета интерфейса
//добавить окно с погодой на сегодня
//возможность растягивания заметок (complete)
//добавить кэширование информации 
