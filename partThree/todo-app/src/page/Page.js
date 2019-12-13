import ShowItem from '@/components/ShowItem.vue'
import TodoService from '@/network/ApiConnection'

export default {
  name: 'page',
  data: () => ({
    todoList : {
      type: Array,
      default:[]
    },
    error: '',
    todoItem: ''
  }),
  components: {
    ShowItem
  },
  methods: {
    async clear(){
      this.todoList = []
      try {
        await TodoService.deleteAllTodo();
        this.todoList = await TodoService.getTodos()
      }catch(err){
        this.error = err.message;
      }
    },
    async eraseItem(id){
      try {
        await TodoService.deleteTodo(id);
        this.todoList = await TodoService.getTodos()
      }catch(err){
        this.error = err.message;
      }
    },
    async checked(id,){
      let index = this.todoList.findIndex((i) => i._id === id);
      try {
        if (this.todoList[index].checkedStatus === 'unchecked') {
          await TodoService.checkedTodo(id, 'checked')
        }else{
          await TodoService.checkedTodo(id, 'unchecked');
        }
        this.todoList = await TodoService.getTodos()
      }catch(err){
        this.error = err.message;
      }
    },
    async addItem(){
      await TodoService.addTodo(this.todoItem);
      this.todoList = await TodoService.getTodos()
    }
  },
  async mounted(){
    try {
      this.todoList = await TodoService.getTodos();
    }catch(err){
      this.error = err.message;
    }
  }
}
