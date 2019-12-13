export default {
  name: 'showItem',
  props: {
    propList: {
      type: Array,
      default:[]
    }
  },
  methods: {
    deleteItem(id){
      this.$parent.eraseItem(id)
    },
    checkItem(id){
      this.$parent.checked(id)
    }
  },
}
