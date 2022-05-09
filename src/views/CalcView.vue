<template>
    <div>
        <h1> Page calc </h1>

        <div class="bank-list_container">

            <div class="calc-select-container">
                <p> Choose bank </p>
                <select @change="changeBank" v-model="selectedBankId">
                    <option disabled value="">Выберите из списка</option>
                    <option :value="bank.id" v-for="bank in this.$store.state.banks"> {{bank.name}}</option>
                </select>
            </div>

            <div v-if="showSelectedBank" class="selectedBank">
                <div class="bank-item_container bank-item_header">
                    <div class="bank-item_data"> Bank name</div>
                    <div class="bank-item_data"> Interest rate</div>
                    <div class="bank-item_data"> Maximum loan</div>
                    <div class="bank-item_data"> Minimum down payment</div>
                    <div class="bank-item_data"> Loan term</div>
                </div>

                <!--    // был проблем, были видны кнопки edit/delete-->
                <!--    // так как это компонент и мне нужно его переиспользовать-->
                <!--    // то я создал дополнительную переменную :bankBtns в которую передаю булевое значение (показывать или не показавть кнопки)-->
                <!--    // в самом компоненте я показываю через директиву v-if так как если false то елемент удаляется из стр-->
                <div class="">
                    <bank-item
                            :bank="this.selectedBank"
                            :bankBtns=false
                    />
                </div>

                <div class="calc-form-container">

                    <!-- v-model="initiaLloan" - для каждого инпута нужно указывать свой v-model="gv" -->
                    <div class="bank-input-item">
                        <p>Initial loan</p>
                        <serhii-input
                                placeholder="Initial loan"
                                required
                                type="text"
                                v-model="initiaLloan"
                        />
                    </div>

                    <div class="bank-input-item">
                        <p>Down payment</p>
                        <serhii-input
                                placeholder="Down payment"
                                required
                                type="text"
                                v-model="downPayment"
                        />
                    </div>

                    <div class="bank-input-item">
                        <p>Total months</p>
                        <serhii-input
                                placeholder="Total months"
                                required
                                type="text"
                                v-model="totalMonths"
                        />
                    </div>

                    <hr>

                    <div class="bank-input-item calcResult">
                        <p> Mounthly payment: <span>{{resultCalc}}</span></p>
                        <serhii-btn @click="calcMounthlyPayment"> calc </serhii-btn>
                    </div>

                </div>
            </div>

            <div class="calcError">{{msgCalcError}}  </div>
        </div>

    </div>
</template>

<script>
    import BankItem from "@/components/BankItem";

    export default {
        name: 'calc-view',
        components: {BankItem},
        data() {
            return {
                selectedBank: '',
                selectedBankId: '',
                resultCalc: '',
                msgCalcError: '',
                showSelectedBank: false
            }
        },
        methods: {
            changeBank(event) {
                console.log("changeBank");
                console.log(this.selectedBankId);
                // так как мы сохраняем значение в массиве, и фильтруем значение тоже через метод массива то на выходе тоже получаем массив
                // но чтобы отрисовать данные банка в компоненте нем нужно передать объект, поетому нужно обратиться первому елементу массива this.selectedBankId)[0]
                this.selectedBank = this.$store.state.banks.filter(bank => bank.id == this.selectedBankId)[0];

                // показываем выбранный банк
                this.showSelectedBank = true

                // скрываем блок с ошибками
                this.hideError();
            },
            calcMounthlyPayment(event){
                console.log(2222);
                let resultMounthlyPayment = '';

                // считываем значения с инпутов, которые ввел пользователь
                let userInitialLoan    = parseInt(this.initiaLloan);
                let userDownPayment    = parseInt(this.downPayment);
                let userTotalMouns     = parseInt(this.totalMonths);

                // считываем значения с текущего банка (который показан нв стр.)
                let interestRate       = parseInt(this.selectedBank.interestRate);
                let maximumLoan        = parseInt(this.selectedBank.maxLoan);
                let minimumDownPayment = parseInt(this.selectedBank.minDownPayment);
                let loanTerm           = parseInt(this.selectedBank.loanTerm);

                // скрываем блок с ошибками
                this.hideError();

                // проверка правильности заполнения полей формы
                if((userInitialLoan >= minimumDownPayment) && (userInitialLoan <= maximumLoan) && (userTotalMouns > 0) && (userTotalMouns <= loanTerm)){
                    // подставляем все значения в формулу и делаем расчет
                    // ! не забывае перевести процентную ставку в число
                    resultMounthlyPayment = ((userInitialLoan-userDownPayment) * (interestRate / 1200) * Math.pow(1 + interestRate / 1200, userTotalMouns)) / (Math.pow(1 + interestRate / 1200, userTotalMouns) - 1);
                    this.resultCalc= resultMounthlyPayment.toFixed(2);
                } else{
                    // показываем тескт ошибки если поля были заполнены неправильно
                    if(!(userInitialLoan >= minimumDownPayment)){
                        this.showError("Please provide a correct min Initial loan value.");
                        console.log(userInitialLoan);
                        console.log(minimumDownPayment);
                        console.log((userInitialLoan >= minimumDownPayment));
                    }
                    if(!(userInitialLoan <= maximumLoan)){
                        this.showError("Please provide a correct max Initial loan value.");
                        console.log(userInitialLoan);
                        console.log(maximumLoan);
                        console.log((userInitialLoan <= maximumLoan));
                    }
                    if(!(userTotalMouns <= loanTerm)){
                        this.showError("Please provide a correct Total months value.");
                    }
                    if(!(userTotalMouns > 0)){
                        this.showError("Please provide a correct Total months value.");
                    }
                }

                return resultMounthlyPayment;


            },
            showError(textError){
                console.log(textError);
                this.msgCalcError = textError;
            },
            hideError(){
                this.msgCalcError = '';
                console.log("hideError")
            }
        },
        mounted() {
            // console.log("mounted");
        }
    }
</script>

<style scoped>
    .bank-input-item{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .bank-input-item p{
        display: flex;
        align-items: center;
        width: 30%;
        text-align: left;
        margin: 0;
    }
    .bank-input-item input{
        width: 70%;
    }
    .calcError{
        color: #cc2c24;
    }
    .calc-select-container{
        display: flex;
    }
    .calc-select-container p{
        display: flex;
        align-items: center;
        width: 30%;
        margin: 0;
        font-weight: bold;
    }
    .calc-select-container select{
        width: 70%;
    }
    .calcResult{
        color: darkcyan;
        font-size: 1.2rem;
        font-weight: bold;
    }


</style>