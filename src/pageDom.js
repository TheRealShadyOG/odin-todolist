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
    create.setAttribute('src', './img/delete.svg');
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

function loadPage() {
    createHeader();
    createSidebar();
    createBody();
}

export { loadPage }