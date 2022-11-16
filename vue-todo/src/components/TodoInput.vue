<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span v-on:click="addTodo" class="addContainer"><i class="fa-solid fa-plus"></i></span>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem:""
        }
    },
    methods:{
        addTodo: function(){
            if(this.newTodoItem !== ''){
                // this.$emit('이벤트 이름',인자1,인자2...);
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput:function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background: #fff;
        height:50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size:0.9rem;
    }
    .addContainer{
        float:right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width:3rem;
        border-radius: 0 5px 5px 0;
    }
    .addContainer i{
        color:#fff;
    }
    .addBtn{
        color:#fff;
        vertical-align: middle;
    }
</style>