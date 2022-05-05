<template>
    <div class="bank-item_container">
<!--        <div class="bank-item_data"> {{bank.id}} - {{bank.name}}</div>-->
        <div class="bank-item_data"> {{bank.name}}</div>
        <div class="bank-item_data"> {{bank.interestRate}}</div>
        <div class="bank-item_data"> {{bank.maxLoan}}</div>
        <div class="bank-item_data"> {{bank.minDownPayment}}</div>
        <div class="bank-item_data"> {{bank.loanTerm}}</div>
        <div class="bank-item_data">
            <div class="bank-item__btns">
                <serhii-btn
                        @click="$store.commit('editBank', bank)"
                        class="btn_edit">
                    edit
                </serhii-btn>
                <serhii-btn
                        @click="$store.commit('deleteBank', bank)"
                        class="btn_delete">
                    delete
                </serhii-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bank-item",
        props: {
            bank: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>