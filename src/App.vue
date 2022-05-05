<template>
    <nav>
        <router-link to="/">Banks</router-link>
        |
        <router-link to="/calc">Calc</router-link>
    </nav>
    <router-view/>
</template>

<script>

    export default {
        data() {
            return {}
        },
        // mounted - хук - это метод из жизненного цикла компонента,
        // который выполняется перед созанием элемента
        mounted() {
            console.log(22)
          if(!localStorage.banks){
            localStorage.setItem('banks', '');
          }

        },
        // наблюдаэмые свойства VUE
        // эта ф-ия следит за изменениями модели
        // если что то изменилось в моделе она отрабатывает
        // ф-ия должна называться так само как и модель
        watch: {},
        methods: {}

    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        box-sizing: inherit;
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
