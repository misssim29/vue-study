<template>
    <div>
        <div class="flex user">
            <i class="fa-regular fa-user"></i>
            <div class="user-description">
                <slot name="username"></slot>
                <div>
                    <slot name="time"></slot>
                </div>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props :{
        info: Object
    }
}
</script>

<style scoped>
.flex{display: flex; align-items: center;}
.user i{margin-right:10px; font-size:80px;}
</style>