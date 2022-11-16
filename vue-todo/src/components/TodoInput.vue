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
                // localstorage << 쿠키의 상위호환
                // 로컬스토리지는 최대 5MB 쿠키는 최대 4MB 그리고 네트워크 통신을 더 적게 할 수 있다
                var obj = {completed:false, item: this.newTodoItem};
                // JSON 자바스크립트값을 객체로 넣는 방법 -> 스토리지 value값에 배열로 넣는 작업
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
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