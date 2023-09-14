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
function setListCreate() {
    const listCreate = document.querySelector('#createlist')
    listCreate.addEventListener('click', displayListForm);
}

function displayListForm() {
    const listForm = document.querySelector('#newlist');
    listForm.classList.remove('hidden');

    setListFormBtns();
}

function setListFormBtns() {
    const addBtn = document.querySelector('#newlistbutton');
    addBtn.addEventListener('click', addNewList);

    const cancelBtn = document.querySelector('#newlistdelete');
    cancelBtn.addEventListener('click', cancelNewList);

    addEventListener('keypress', submitEnter)
}

function submitEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addNewList();
    }
}

function addNewList() {
    const newListName = document.querySelector('#newlistname').value;
    if (newListName !== '') {
        listOfLists[newListName] = [];

        clearLists()
        changeCurrentList(newListName);

        let listNames = Object.keys(listOfLists);
        loadLists(listNames);
        setListListener();
        setListDeleteBtn();

        hideListForm();
        removeEventListener('keypress', submitEnter);
    }
}

function clearLists() {
    let listBody = document.querySelector('#sidebarcontainer');
    while (listBody.firstChild) {
        listBody.removeChild(listBody.lastChild);
    }
}

function cancelNewList() {
    hideListForm();
    removeEventListener('keypress', submitEnter);
}

function hideListForm() {
    const listForm = document.querySelector('#newlist');
    listForm.reset()
    listForm.classList.add('hidden');
}

// Create object for lists
const listOfLists = {};
listOfLists.Default = defaultList;

let currentList = defaultList;

// Users should be able to swap lists 
function setListListener() {
    const listTitles = document.querySelectorAll('#listtitle');
    listTitles.forEach((ele) => {
        ele.addEventListener('click', listListener)
    })
}

function listListener(ele) {
    let listName = ele.target.textContent
    changeCurrentList(listName);
}

function changeCurrentList(listName) {
    currentList = listOfLists[listName]

    clearTodos();
    loadTodos(currentList);
    setTodoDeleteBtns();
}

function clearTodos() {
    let todoBody = document.querySelector('#bodycontainer');
    while (todoBody.firstChild) {
        todoBody.removeChild(todoBody.lastChild);
    }
}


// Button to delete list 
// When deleting list, delete all todos inside
function setListDeleteBtn() {
    const listDelete = document.querySelectorAll('#deletelist');
    listDelete.forEach((ele) => {
        ele.addEventListener('click', deleteList);
    })
}

function deleteList(ele) {
    let listName = ele.target.previousSibling.textContent;

    if (listOfLists[listName] === currentList) {
        currentList = [];
        clearTodos();
    }

    delete listOfLists[listName];

    let container = ele.target.parentElement.parentElement;
    let listItem = ele.target.parentElement;
    container.removeChild(listItem);
}

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
setListDeleteBtn();
setListCreate();