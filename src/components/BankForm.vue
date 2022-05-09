<template>
    <!-- The Modal add new bank -->
    <div class="modal" id="myModal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Add new bank</h3>
            <form>
                <div>
                    <p class="bankTitle">Bank Name</p>
                    <serhii-input
                            placeholder="Bank Name"
                            required
                            type="text"
                            v-model="bank.name"
                    />
                </div>
                <div>
                    <p class="bankTitle">Interest Rate</p>
                    <serhii-input
                            placeholder="Interest Rate"
                            required
                            type="number"
                            v-model="bank.interestRate"
                    />
                </div>
                <div>
                    <p class="bankTitle">Maximum Loan</p>
                    <serhii-input
                            placeholder="Maximum Loan"
                            required
                            type="number"
                            v-model="bank.maxLoan"
                    />
                </div>
                <div>
                    <p class="bankTitle">Minimum Down Payment</p>
                    <serhii-input
                            placeholder="Minimum Down Payment"
                            required
                            type="number"
                            v-model="bank.minDownPayment"
                    />
                </div>
                <div>
                    <p class="bankTitle">Loan Term</p>
                    <serhii-input
                            placeholder="Loan Term"
                            required
                            type="number"
                            v-model="bank.loanTerm"
                    />
                </div>

                <serhii-btn
                        @click="createBank"
                        v-show="$store.state.btnCreateBankVisible"
                >
                    create
                </serhii-btn>

                <serhii-btn
                        @click="editBank"
                        v-show="$store.state.btnEditBankVisible"
                >
                    editBank
                </serhii-btn>
            </form>
        </div>
    </div>
    <!-- The Modal add new bank -->
</template>

<script>

    export default {
        name: "bank-form",
        data() {
            return {
                bank: {
                    id: '',
                    name: '',
                    interestRate: '',
                    maxLoan: '',
                    minDownPayment: '',
                    loanTerm: ''
                },
                // массив который содержит елементы списка
                // это будет объект в котором мы задаем значение value: "title" и название что будет отображаться в селекте name: "По названию"
                sortOptions: [
                    {
                        id: '',
                        name: '',
                        interestRate: '',
                        maxLoan: '',
                        minDownPayment: '',
                        loanTerm: ''
                    }
                ],
            }
        },
        methods: {
            createBank() {
                // создаем уникальный ID
                this.bank.id = Date.now();

                // с помощью модели bank считываем все значения с формы и помещаем из в переменную в хранилище VUEX
                this.$store.state.newBank = this.bank;

                // вызываем метод из VUEX который добавляет новый банк в localStorage
                this.$store.commit('addBank');

                // очистка полей формы
                this.bank = {
                    id: '',
                    name: '',
                    interestRate: '',
                    maxLoan: '',
                    minDownPayment: '',
                    loanTerm: ''
                };

                // закрываем диалоговое окно
                this.$store.commit('hideDialog')
            },
            editBank() {
                console.log("Edit bank");

                // получаем массив всех банков
                let arrayBanks = this.$store.state.banks;
                console.log(arrayBanks);

                // получаем банк который нужно удалить из VUEX
                let arrEditBank = this.$store.state.editBank[0];
                console.log(arrEditBank);

                // получаем index банка который нужно удалить из VUEX
                let indexEditBank = this.$store.state.indexEditBank;
                console.log(indexEditBank);

                // заменяем в массиве банков данными которые мы изменили
                arrayBanks[indexEditBank] = this.bank;

                // сохраняем в локал сторедж
                this.$store.commit('saveDataInLocalStorage', arrayBanks);

                // закрываем диалоговое окно
                this.$store.state.dialogVisible = false;

                // Востанавливаем кнопки по умолчанию
                // скрываем кнопку создания банка
                this.$store.state.btnCreateBankVisible = true;

                // показываем кнопку редактирования банка
                this.$store.state.btnEditBankVisible = false;
            }
        },
        mounted() {
            console.log("mounted BankForm");

            // была нажата кнопка edit, устанавливаем флаг true
            // это нужно так как вдугих файлах нужно отслеживать состояние формы
            // если форма была открыта через кнопку edit то нужно автоматом заполнять поля формы
            // иначе нужно их очищать или ничего не делать
            if (this.$store.state.btnEdtitBankIsClick) {
                // получаем банк который нужно изменить тз VUEX
                let arrEditBank = this.$store.state.editBank;
                console.log(arrEditBank[0].id);

                let id = this.$store.state.editBank[0].id;
                this.bank.name = this.$store.state.editBank[0].name;
                this.bank.interestRate = this.$store.state.editBank[0].interestRate;
                this.bank.maxLoan = this.$store.state.editBank[0].maxLoan;
                this.bank.minDownPayment = this.$store.state.editBank[0].minDownPayment;
                this.bank.loanTerm = this.$store.state.editBank[0].loanTerm;
            }

        }
    }
</script>

<style scoped>
    input {
        display: block;
        border: 1px solid #cdcdcd;
        border-radius: 4px;
        padding: 0.75rem;
        outline: none;
        background: transparent;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        width: 100%;
        max-width: 100%;
        line-height: 1;
    }
</style>