<template>
  <div class="TodoList">
    <transition-group name="list" tag="ul">
        <!--vue에서의 배열 반복문으로 뿌려주는 방법(v-for)-->
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
            <i class="fa-solid fa-check checkBtn" v-bind:class="{checkbtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem,index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span v-on:click="removeTodo(todoItem, index)" class="removeBtn"><i class="fa-regular fa-trash-can"></i></span>
        </li>
    </transition-group>  
  </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        removeTodo(todoItem, index){
            this.$emit('removeItem',todoItem,index);
        },
        toggleComplete(todoItem,index){
            this.$emit('toggleItem',todoItem,index)
        }
    }
}
</script>

<style scoped>
    ul{margin:0; padding: 0}
    ul li{list-style: none; margin:0; padding:0; text-align: left;
    display: flex; min-height: 50px; height:50px; line-height: 50px; margin:0.5rem 1rem; padding:0 0.9rem; background: #fff; border-radius: 5px;
    }
    .removeBtn{margin-left:auto; color:red}
    .checkBtn{line-height: 45px; color:skyblue; margin-right:5px;}
    .checkbtnCompleted{color:gray}
    .textCompleted{text-decoration: line-through; color:lightgray}

    /* 리스트 아이템 트랜지션 효과 */
    .list-item{
        display: inline-block;
        margin-right:10px
    }
    .list-enter-active, .list-leave-active{
        transition: all 1s;
    }
    .list-enter-from , .list-leave-to{
        opacity:0;
        transform: translateY(30px)
    }
</style>