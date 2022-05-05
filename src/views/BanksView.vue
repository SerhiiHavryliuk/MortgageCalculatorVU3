<template>
    <div>
        <h1> Page Banks </h1>
        <bank-list/>
    </div>
</template>

<script>
    import BankList from "../components/BankList";
    export default {
        name: 'banks-view',
        components: {BankList},
    }
</script>

<style scoped lang="scss">

</style>
