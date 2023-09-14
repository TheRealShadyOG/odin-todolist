import { loadLists, loadPage, loadTodos } from "./pageDom";

// Create todo items with a factory
// todo should have title, descr, date, priority
const todoFactory = (title, descr, date, priority) => {
    return {title, descr, date, priority}
}
// Assign todo to a list

// todos should have a button to delete
function setTodoDeleteBtns() {
    const todoDeleteBtn = document.querySelectorAll('#deletetodo');
    todoDeleteBtn.forEach((ele) => {
    ele.addEventListener('click', deleteTodo);
})
}

function deleteTodo(ele) {
    let container = ele.target.parentElement.parentElement;
    let todoItem = ele.target.parentElement;
    // when delete todo remove from list 
    container.removeChild(todoItem)
}

// Users should be able to create new todo
// Form for user to create new todo
// todo should get added to current list

// Add default list of todos

const defaultList = [];
const createDefault = (() => {
    const washDishes = todoFactory('Wash Dishes', 'Clean dishes in the sink', '09-14-2023',
                                'Low');
    defaultList.push(washDishes)
    const brushTeeth = todoFactory('Brush Teeth', '', '09-13-2023', 'Medium');
    defaultList.push(brushTeeth);
    const makeDinner = todoFactory('Make Dinner', 'Cook something to eat', '09-13-2023',
                                'Low');
    defaultList.push(makeDinner);
    const finishProject = todoFactory('Finish Project', 'Finish To Do List', '09-15-2023',
                                'High');
    defaultList.push(finishProject);
})();

// Load default list if no local storage


// Users should be able to create a new list 
// Form for users to create new list

// Create object for lists
const listOfLists = {};
listOfLists.Default = defaultList;

let currentList = defaultList;

// Users should be able to swap lists 
function setListListener() {
    const listTitles = document.querySelectorAll('#listtitle');
    listTitles.forEach((ele) => {
        ele.addEventListener('click', changeCurrentList)
    })
}

function changeCurrentList(ele) {
    let listName = ele.target.textContent
    currentList = listOfLists[listName]

    let todoBody = document.querySelector('#bodycontainer');
    while (todoBody.firstChild) {
        todoBody.removeChild(todoBody.lastChild);
    }

    loadTodos(currentList);
    setTodoDeleteBtns();
}


// Button to delete list 
// When deleting list, delete all todos inside

// UI
// Header with 'To Do List'
// Sidebar with Lists and button to create new list
// Body with todos of current list and button to create new todo


// Add local storage
// Save lists and todos to local storage when new one is added
// Look for data in local storage when loading


function loadContent(list) {
    let listNames = Object.keys(listOfLists);
    loadPage();
    loadTodos(list);
    loadLists(listNames);
}

loadContent(defaultList);

setTodoDeleteBtns();
setListListener();