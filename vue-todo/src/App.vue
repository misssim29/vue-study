<template>
  <div>
    <todo-header></todo-header>
    <!-- <todo-input v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드명"></todo-input> -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:removeAll="removeAllClick"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


export default {
  name: 'App',
  data:function(){
    return {
      todoItems: []
    }
  },
  methods:{
    addOneItem: function(newtodoItem){
      // localstorage << 쿠키의 상위호환
      // 로컬스토리지는 최대 5MB 쿠키는 최대 4MB 그리고 네트워크 통신을 더 적게 할 수 있다
      var obj = {completed:false, item: newtodoItem};
      // JSON 자바스크립트값을 객체로 넣는 방법 -> 스토리지 value값에 배열로 넣는 작업
      localStorage.setItem(this.todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    removeAllClick:function(){
      localStorage.clear();
      this.todoItems = [];
    },
    toggleOneItem:function(todoItem,index){
        this.todoItems[index].completed = !this.todoItems[index].completed;
        localStorage.removeItem(todoItem.item)
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  // 라이프사이클
  created: function(){
        if(localStorage.length > 0){
            for(var i=0;i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //배열 꺼내는것
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        } 
    },
  components: {
    'todo-header' : TodoHeader,
    'todo-input' : TodoInput,
    'todo-list' : TodoList,
    'todo-footer' : TodoFooter
  }
}
</script>

<style>
body{font-family: 'Noto Sans KR', sans-serif; margin:0; padding:0; width:100vw;}
body{text-align: center; background-color: #F6F6F6;}
input{border-style:groove; width:200px;}
button{border-style:groove}
.shadow{box-shadow: 5px 10px 10px rgba(0,0,0,0.03);}
</style>
