import axios from 'axios';

const url = 'http://localhost:5000/api/todos/';

class TodoService {
  // Get Todos
  static getTodos() {
      return new Promise( async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          resolve(
            data.map(todo => ({
              ...todo,
              createdAt: new Date(todo.createdAt)
            }))
          )
        } catch(err) {
          reject(err);
        }
      })
  }
  // Add Todos
  static addTodo(todo){
    return axios.post(url, {
      todoItem : todo
    });
  }
  // Update Todos
  static checkedTodo(id, status){
    return axios.post(`${url}${id}`, {
      id: id,
      checkedStatus : status
    });
  }
  // Delete Todos
  static deleteTodo(id){
    return axios.delete(`${url}${id}`)
  }
  // Delete All Todos
  static deleteAllTodo(){
    return axios.delete(url)
  }
}

export default TodoService;
