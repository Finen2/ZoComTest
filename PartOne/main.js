
let todoList = [];

window.onload = () => {
  localList = localStorage.getItem('todoList');
  if (localList === null || localList === undefined) {
    console.log("data is missing from local storage");
  }else{
    todoList = JSON.parse(localList)
  }
  this.showList()
  this.addItem('hjdsk')
};

showList = () => {
  document.getElementById('showTodo').innerHTML = todoList.map(item =>
    `<div class="${item.info.checkedStatus}" id="${item.id}">
      <button onclick="checkItem('${item.id}')">Alert</button>
      <div>ID: ${item.id || '-'}</div>
      <div>Todo: ${item.info.todoItem || '-'}</div>
      <button onclick="eraseItem('${item.id}')">Delete</button>
    </div>`
  ).join('')
}

addItem = (item) => {
  todoList.push({
    id : this.create_UUID(),
    info : {
      todoItem : item,
      checkedStatus : 'unchecked'
    }
  });
  console.log(todoList);
  this.saveList();
  this.showList();
};

saveList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

clearList = () => {
  todoList = []
  localStorage.clear();
  this.showList();
};

eraseItem = (id) => {
  let removedItem = todoList.filter(e => e.id !== id)
  todoList = removedItem
  this.saveList();
  this.showList();
}

checkItem = (id) => {
  let index = todoList.findIndex((i) => i.id === id);
  if (todoList[index].info.checkedStatus === 'unchecked') {
    todoList[index].info.checkedStatus = 'checked'
  } else {
    todoList[index].info.checkedStatus = 'unchecked'
  }
  this.saveList();
  this.showList();
}

create_UUID = () => {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return ( c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
