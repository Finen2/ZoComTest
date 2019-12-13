import {SaveList} from '@/storage/Storage'

export default {
  name: 'showItem',
  props: {
    propList: {
      type: Array,
      default:[]
    }
  },
  methods: {
    save(){
      SaveList();
    },
    deleteItem(id){
      this.$parent.eraseItem(id)
    },
    checkItem(id){
      this.$parent.checked(id)
    }
  },
}
