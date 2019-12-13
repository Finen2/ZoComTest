<template lang="html">
  <table id="showTodo" class="showTodo">
    <tr v-for="item in propList" :class="'tableItem ' + item.checkedStatus" :key="item._id">
      <td class="tableItem___part tableItem___part--large"><p class="todoItemText"><strong> Todo: </strong>{{item.todoItem}}</p></td>
      <td class="tableItem___part tableItem___part--checked"><button class="btn" @click="checkItem(item._id)" >Done</button></td>
      <td class="tableItem___part tableItem___part--unchecked"><button class="btn btn--erase" @click="checkItem(item._id)">Undo</button></td>
      <td class="tableItem___part"><button class="btn btn--erase" @click="deleteItem(item._id)" >Delete</button></td>
    </tr>
  </table>
</template>

<script src="./ShowItem.js"></script>
<style lang="sass" src="./ShowItem.sass"></style>
