<template>
    <button>
        <!--// все что ьы помещаем внутры кнопки будет уходить в тег <slot></slot>-->
        <slot/>
    </button>
    
</template>

<script>
    export default {
        name: "serhii-btn"
    }
</script>

<style scoped>
    a.button,
    button {
        border: 1px solid #0366ee;
        border-radius: 4px;
        background: #0366ee;
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
        text-transform: none;
        padding: 0.55rem 0.7rem;
        margin: 0 0 .5rem;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        line-height: 1;
        border: none;
    }

    button:hover {
        border: 1px solid #0250bc;
        background: #0250bc;
        color: #fff;
        text-decoration: none;
        border: none;
    }

    /* классы модификаторы*/
    .btn_edit{
        background: rgb(8, 162, 162);
    }
    .btn_edit:hover{
        background: darkcyan;
    }
    .btn_delete{
        background: #d33c40;
    }
    .btn_delete:hover {
        background: #a71b20;
    }

</style>