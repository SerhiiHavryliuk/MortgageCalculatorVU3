<template>
    <!--    // !!! Serhii:-->
    <!--    // Была проблема сделать двухсторонее связываение в компоненте-->
    <!--    // я в компонент передаю значение-->
    <!--    // нужно гуглить -  Использование v-model на компонентах-->
    <!--    // помогло https://ru.vuejs.org/v2/guide/components.html#:~:text=v%2Dbind%3Avalue%3D%22value%22-->
    <input :value="modelValue" @input="updateInput" type="text" v-bind:value="value">
</template>

<script>
    export default {
        name: "serhii-input",
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
        border: 1px solid lightseagreen;
        outline: none;
        padding: 10px;
    }
</style>