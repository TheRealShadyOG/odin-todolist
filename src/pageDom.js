function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const logo = document.createElement('img');
    logo.setAttribute('src', './img/logo.svg');
    logo.setAttribute('id', 'logo');
    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'headertext');
    headerText.textContent = 'To Do List';

    header.appendChild(logo);
    header.appendChild(headerText);

    const pageBody = document.querySelector('body');
    pageBody.appendChild(header);
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');

    const sidebarHeader = document.createElement('div');
    sidebarHeader.setAttribute('id', 'sidebarheader');
    const sidebarTitle = document.createElement('div');
    sidebarTitle.setAttribute('id', 'sidebartitle');
    sidebarTitle.textContent = 'Lists';
    const create = document.createElement('img');
    create.setAttribute('src', './img/create.svg');
    create.setAttribute('id', 'createlist');
    sidebarHeader.appendChild(sidebarTitle);
    sidebarHeader.appendChild(create);

    const sidebarContainer = document.createElement('div');
    sidebarContainer.setAttribute('id', 'sidebarcontainer');

    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(sidebarContainer);

    const pageBody = document.querySelector('body');
    pageBody.appendChild(sidebar);
}

function createBody() {
    const body = document.createElement('div');
    body.setAttribute('id', 'body');

    const bodyHeader = document.createElement('div');
    bodyHeader.setAttribute('id', 'bodyheader');
    const title = document.createElement('div');
    title.textContent = 'Title';
    const descr = document.createElement('div');
    descr.textContent = 'Description';
    const date = document.createElement('div');
    date.textContent = 'Date';
    const priority = document.createElement('div');
    priority.textContent = 'Priority'
    const create = document.createElement('img');
    create.setAttribute('src', './img/create.svg');
    create.setAttribute('id', 'createtodo');
    bodyHeader.appendChild(title);
    bodyHeader.appendChild(descr);
    bodyHeader.appendChild(date);
    bodyHeader.appendChild(priority);
    bodyHeader.appendChild(create);

    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('id', 'bodycontainer');

    body.appendChild(bodyHeader);
    body.appendChild(bodyContainer);

    const pageBody = document.querySelector('body');
    pageBody.appendChild(body);
}

function createListForm() {
    const formContainer = document.createElement('dialog');
    formContainer.setAttribute('id', 'listformcontainer');

    const newList = document.createElement('form');
    newList.setAttribute('id', 'newlist');

    const listName = document.createElement('input');
    listName.setAttribute('type', 'text');
    listName.setAttribute('placeholder', 'List Name');
    listName.setAttribute('id', 'newlistname');
    const listButton = document.createElement('button');
    listButton.setAttribute('type', 'button');
    listButton.setAttribute('id', 'newlistbutton');
    listButton.textContent = 'Add';
    const listDelete = document.createElement('img');
    listDelete.setAttribute('src', './img/delete.svg');
    listDelete.setAttribute('id', 'newlistdelete');
    newList.appendChild(listName);
    newList.appendChild(listButton);
    newList.appendChild(listDelete);

    formContainer.appendChild(newList);

    const pageBody = document.querySelector('body');
    pageBody.appendChild(formContainer);
}

function createTodoForm() {
    const formContainer = document.createElement('dialog');
    formContainer.setAttribute('id', 'todoformcontainer');

    const newTodo = document.createElement('form');
    newTodo.setAttribute('id', 'newtodo');

    const todoName = document.createElement('textarea');
    todoName.setAttribute('id', 'newtodoname');
    todoName.textContent = 'Title';
    const todoDescr = document.createElement('textarea');
    todoDescr.setAttribute('id', 'newtododescr');
    todoDescr.textContent = 'Description';
    const todoDate = document.createElement('textarea');
    todoDate.setAttribute('id', 'newtododate');
    todoDate.textContent = 'Date (DD-MM-YYYY)';
    const todoPriority = document.createElement('textarea');
    todoPriority.setAttribute('id', 'newtodopriority');
    todoPriority.textContent = 'Priority';
    const todoButton = document.createElement('button');
    todoButton.setAttribute('id', 'newtodobutton');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = 'Add';
    const todoDelete = document.createElement('img');
    todoDelete.setAttribute('src', './img/delete.svg');
    todoDelete.setAttribute('id', 'newtododelete');
    newTodo.appendChild(todoName);
    newTodo.appendChild(todoDescr);
    newTodo.appendChild(todoDate);
    newTodo.appendChild(todoPriority);
    newTodo.appendChild(todoButton);
    newTodo.appendChild(todoDelete);

    formContainer.appendChild(newTodo);

    const pageBody = document.querySelector('body');
    pageBody.appendChild(formContainer);
}

function loadPage() {
    createHeader();
    createSidebar();
    createBody();
    createListForm();
    createTodoForm();
}

function loadTodos(list) {
    for (let i = 0; i < list.length; i++) {
        const todoContainer = document.createElement('div');
        todoContainer.setAttribute('id', 'todocontainer');

        const title = document.createElement('div');
        title.textContent = list[i].title;
        const descr = document.createElement('div');
        descr.textContent = list[i].descr;
        const date = document.createElement('div');
        date.textContent = list[i].date;
        const priority = document.createElement('div');
        priority.textContent = list[i].priority;
        const deleteImg = document.createElement('img');
        deleteImg.setAttribute('src', './img/delete.svg');
        deleteImg.setAttribute('id', 'deletetodo');
        todoContainer.appendChild(title);
        todoContainer.appendChild(descr);
        todoContainer.appendChild(date);
        todoContainer.appendChild(priority);
        todoContainer.appendChild(deleteImg);

        const bodyContainer = document.querySelector('#bodycontainer');
        bodyContainer.appendChild(todoContainer);
    }
}

function loadLists(list) {
    for (let i = 0; i < list.length; i++) {
        const listContainer = document.createElement('div');
        listContainer.setAttribute('id', 'listcontainer');

        const listTitle = document.createElement('div');
        listTitle.setAttribute('id', 'listtitle');
        listTitle.textContent = list[i];
        const deleteImg = document.createElement('img');
        deleteImg.setAttribute('src', './img/delete.svg');
        deleteImg.setAttribute('id', 'deletelist');
        listContainer.appendChild(listTitle);
        listContainer.appendChild(deleteImg);

        const sidebarContainer = document.querySelector('#sidebarcontainer');
        sidebarContainer.appendChild(listContainer);
    }
}

export { loadPage, loadTodos, loadLists }