<template>
    <div>
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
            <span v-on:click="addTodo" class="addContainer"><i class="fa-solid fa-plus"></i></span>
        </div>
        <modal-box :show="showModal" @close="showModal = false">
            <template v-slot:header>
                <h3>경고!</h3>
            </template>
            <template v-slot:body>
                아무것도 입력하지 않으셨습니다.
            </template>
            <template v-slot:footer>
                <i class="fa-solid fa-xmark closeBtn" @click="showModal = false"></i>
            </template>
        </modal-box>
    </div>
</template>

<script>
import ModalBox from './common/ModalBox.vue';

export default {
    data(){
        return {
            newTodoItem:"",
            showModal: false
        }
    },
    methods:{
        addTodo(){
            if(this.newTodoItem !== ''){
                // this.$emit('이벤트 이름',인자1,인자2...);
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            } else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        'modal-box':ModalBox
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
        width:90%;
        margin:0 auto;
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
    .closeBtn{
        color: #42b983;
    }
</style>