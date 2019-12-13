export function CheckStorage() {
  let localList = localStorage.getItem('todoList');
  if (localList === null || localList === undefined) {
    return []
  }else{
    return JSON.parse(localList)
  }
}

export function SaveList(todoList){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

export function ClearList(){
  localStorage.clear();
}
