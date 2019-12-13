<template lang="html">
  <div class="container">
    <p class="error" v-if="error">{{error}}</p>
    <form class="inputTodo" name="todoForm" @submit.prevent="addItem">
      <input class="textInput" v-model="todoItem" type="text" placeholder="Todo item" name="item">
      <button class="btn" type="submit" name="button">Add to list</button>
      <button class="btn btn--erase" type="button" @click="clear" name="eraseButton">Erase all items</button>
    </form>
    <ShowItem :propList="todoList"/>
  </div>
</template>

<script src="./Page.js"></script>
<style lang="sass" src="./Page.sass"></style>
