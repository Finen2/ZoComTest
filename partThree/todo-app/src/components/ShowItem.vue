<template lang="html">
  <table id="showTodo" class="showTodo">
    <tr v-for="item in propList" :class="'tableItem ' + item.info.checkedStatus" :key="item.id">
      <td class="tableItem___part tableItem___part--large"><p class="todoItemText"><strong> Todo: </strong>{{item.info.todoItem}}</p></td>
      <td class="tableItem___part tableItem___part--checked"><button class="btn" @click="checkItem(item.id)" >Done</button></td>
      <td class="tableItem___part tableItem___part--unchecked"><button class="btn btn--erase" @click="checkItem(item.id)">Undo</button></td>
      <td class="tableItem___part"><button class="btn btn--erase" @click="deleteItem(item.id)" >Delete</button></td>
    </tr>
  </table>
</template>

<script src="./ShowItem.js"></script>
<style lang="sass" src="./ShowItem.sass"></style>
