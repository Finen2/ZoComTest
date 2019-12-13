import ShowItem from '@/components/ShowItem.vue'
import {CheckStorage, SaveList, ClearList} from '@/storage/Storage'

export default {
  name: 'page',
  data: () => ({
    todoList : {
      type: Array,
      default:[]
    },
    todoItem: ''
  }),
  components: {
    ShowItem
  },
  methods: {
    save(){
      SaveList(this.todoList);
    },
    clear(){
      this.todoList = []
      ClearList();
    },
    eraseItem(id){
      let removedItem = this.todoList.filter(e => e.id !== id);
      this.todoList = removedItem ;
      this.save()
    },
    checked(id){
      let index = this.todoList.findIndex((i) => i.id === id);
      if (this.todoList[index].info.checkedStatus === 'unchecked') {
        this.todoList[index].info.checkedStatus = 'checked';
      }else{
        this.todoList[index].info.checkedStatus = 'unchecked';
      }
      this.save()
    },
    addItem(){
      this.todoList.push({
        id : this.create_UUID(),
        info : {
          todoItem : this.todoItem,
          checkedStatus : 'unchecked'
        }
      })
      this.save()
    },
    create_UUID(){
      let dt = new Date().getTime();
      let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return ( c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }
  },
  mounted(){
    this.todoList = CheckStorage();
  }
}
