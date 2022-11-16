<template>
  <div class="TodoList">
    <ul>
        <!--vue에서의 배열 반복문으로 뿌려주는 방법(v-for)-->
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
            <i class="fa-solid fa-check checkBtn" v-bind:class="{checkbtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem,index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span v-on:click="removeTodo(todoItem, index)" class="removeBtn"><i class="fa-regular fa-trash-can"></i></span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        removeTodo:function(todoItem, index){
            this.$emit('removeItem',todoItem,index);
        },
        toggleComplete:function(todoItem,index){
            this.$emit('toggleItem',todoItem,index)
        }
    }
}
</script>

<style scoped>
    ul{margin:0; padding: 0}
    ul li{list-style: none; margin:0; padding:0; text-align: left;
    display: flex; min-height: 50px; height:50px; line-height: 50px; margin:0.5rem 0; padding:0 0.9rem; background: #fff; border-radius: 5px;
    }
    .removeBtn{margin-left:auto; color:red}
    .checkBtn{line-height: 45px; color:skyblue; margin-right:5px;}
    .checkbtnCompleted{color:gray}
    .textCompleted{text-decoration: line-through; color:lightgray}
</style>