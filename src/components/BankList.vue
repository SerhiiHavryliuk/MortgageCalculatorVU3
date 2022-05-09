<template>
    <div class="bank-list_container">
        <div class="bank-item_container bank-item_header">
            <div class="bank-item_data"> Bank name</div>
            <div class="bank-item_data"> Interest rate</div>
            <div class="bank-item_data"> Maximum loan</div>
            <div class="bank-item_data"> Minimum down payment</div>
            <div class="bank-item_data"> Loan term</div>
            <div class="bank-item_data">
                <serhii-btn @click="$store.commit('showDialog')">add new bank</serhii-btn>
            </div>
        </div>
    </div>

    <!--  :bankBtns=true - показываем кнопки edit/del -->
    <div class="bank-list_container">
        <bank-item
                :bank="bank"
                :bankBtns=true
                :key="bank.id"
                v-for="bank in $store.state.banks"
        />
    </div>

    <!--    диалоговое окно добавление нового банка   -->
    <serhii-dialog v-model:show="$store.state.dialogVisible">
        <bank-form
                @create="createPost"
        />
    </serhii-dialog>

</template>

<script>
    import BankItem from "./BankItem";
    import BankForm from "./BankForm";

    export default {
        name: "bank-list",
        components: {BankForm, BankItem},
        data() {
            return {
                // для теста
                // banks: [
                //     {
                //         id: 1,
                //         name: ' Name of bank',
                //         interestRate: '10',
                //         maxLoan: "1000",
                //         minDownPayment: "10",
                //         loanTerm: "12"
                //     },
                //     {
                //         id: 2,
                //         name: ' Name of bank',
                //         interestRate: '10',
                //         maxLoan: "1000",
                //         minDownPayment: "10",
                //         loanTerm: "12"
                //     },
                //     {
                //         id: 3,
                //         name: ' Name of bank',
                //         interestRate: '10',
                //         maxLoan: "1000",
                //         minDownPayment: "10",
                //         loanTerm: "12"
                //     },
                //     {
                //         id: 4,
                //         name: ' Name of bank',
                //         interestRate: '10',
                //         maxLoan: "1000",
                //         minDownPayment: "10",
                //         loanTerm: "12"
                //     },
                //     {
                //         id: 5,
                //         name: ' Name of bank',
                //         interestRate: '10',
                //         maxLoan: "1000",
                //         minDownPayment: "10",
                //         loanTerm: "12"
                //     },
                // ],
            }
        },
        methods: {}
    }
</script>

<style>
    .bank-list_container {
        max-width: 900px;
        margin: 0 auto;
        padding: 25px 25px 10px 25px;
        color: #000;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 5px rgb(0 0 0/20%), 0 2px 2px rgb(0 0 0/14%), 0 3px 1px -2px rgb(0 0 0/12%);
    }

    .bank-item_header {
        font-weight: bold;
    }

    .bank-item_container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
    }

    .bank-item_data {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        width: calc(100% / 6);
    }

</style>