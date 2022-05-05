import {createStore} from 'vuex'

export default createStore({
    state: {
        // банки для теста
        // banks: [
        //   {
        //     id: 1,
        //     name: ' Name of bank',
        //     interestRate: '10',
        //     maxLoan: "1000",
        //     minDownPayment: "10",
        //     loanTerm: "12"
        //   },
        //   {
        //     id: 2,
        //     name: ' Name of bank',
        //     interestRate: '10',
        //     maxLoan: "1000",
        //     minDownPayment: "10",
        //     loanTerm: "12"
        //   },
        //   {
        //     id: 3,
        //     name: ' Name of bank',
        //     interestRate: '10',
        //     maxLoan: "1000",
        //     minDownPayment: "10",
        //     loanTerm: "12"
        //   },
        //   {
        //     id: 4,
        //     name: ' Name of bank',
        //     interestRate: '10',
        //     maxLoan: "1000",
        //     minDownPayment: "10",
        //     loanTerm: "12"
        //   },
        //   {
        //     id: 5,
        //     name: ' Name of bank',
        //     interestRate: '10',
        //     maxLoan: "1000",
        //     minDownPayment: "10",
        //     loanTerm: "12"
        //   },
        // ],
        // считываем данные с localStorage
        // проверяем есть ли что то в локал сторедж, если да то подгружаем с него данные
        // иначе создаем пустой массив (важно массив, а не строку)
        banks: localStorage.banks ? JSON.parse(localStorage.getItem('banks')) : [],
        newBank: '',
        editBank: [],
        indexEditBank: '',

        // диалоговое окно добавление нового банка
        dialogVisible: false,
        // по умолчанию показыаем кнопку создания банка
        btnCreateBankVisible: true,
        // по умолчанию скрываем кнопку редактирования банка
        btnEditBankVisible: false,
        // переменная для отслеживания клика по кнопке edit
        btnEdtitBankIsClick: false
    },
    getters: {},
    mutations: {
        addBank(state) {
            console.log("add bank");

            // добавляем новый банк
            state.banks.push(state.newBank);

            // сохраняем новое значение в localtorage
            // Как вызвать функцию внутри функции (call function in mutation vuex)
            // https://stackoverflow.com/questions/40487627/can-i-call-commit-from-one-of-mutations-in-vuex-store#:~:text=For%20the%20record.%20To%20call%20other%20mutations%20from%20a%20mutation%20method%20do%20it%20like%20this%3A
            this.commit("saveDataInLocalStorage", state.banks);

            // очищаем переменную в сторе VUEX
            state.newBank = ''
        },

        // метод удаления банков
        // формируем новый массив
        // в новый масив ложим те элементы которые не равны id банка которое мы передаем через аргумент idBankDelete
        // также мы должны передать как аргумент state, чтобы изменять состояние нашего массива банков
        deleteBank(state, idBankDelete) {
            console.log(idBankDelete.id);

            // формируем новый массив без банка id которого пришло в аргументе idBankDelete
            state.banks = state.banks.filter(bank => bank.id !== idBankDelete.id);

            // сохраняем новое значение в localtorage
            this.commit("saveDataInLocalStorage", state.banks)
        },

        editBank(state, idBankEdit) {
            console.log("editBank");
            console.log(idBankEdit.id);

            // открываем диалоговое окно
            state.dialogVisible = true;

            // Сохраняем в стор банк который нужно изменить
            // в новый массив попадает только 1 банк который мы нашли по id
            state.editBank = state.banks.filter(bank => bank.id == idBankEdit.id);
            console.log(state.editBank);

            // Сохраняем в стор номер index в массиве банка который нужно изменить
            for (let i = 0; i <= state.banks.length - 1; i++) {
                if (state.banks[i].id === idBankEdit.id) {
                    state.indexEditBank = i;
                }
            }

            // скрываем кнопку создания банка
            state.btnCreateBankVisible = false;

            // показываем кнопку редактирования банка
            state.btnEditBankVisible = true;

            // была нажата кнопка edit, устанавливаем флаг true
            // это нужно так как вдугих файлах нужно отслеживать состояние формы
            // если форма была открыта через кнопку edit то нужно автоматом заполнять поля формы
            // иначе нужно их очищать или ничего не делать
            state.btnEdtitBankIsClick = true;
        },


        // сохраняем новое значение в localtorage
        saveDataInLocalStorage(state, data) {
            // обновляем значение в localtorage
            const parsed = JSON.stringify(data);
            localStorage.setItem('banks', parsed);
        },

        // открытие диалога
        showDialog(state) {
            state.dialogVisible = true;

            // была нажата кнопка add new bank, устанавливаем флаг false
            // это нужно так как вдугих файлах нужно отслеживать состояние формы
            // если форма была открыта через кнопку edit то нужно автоматом заполнять поля формы
            // иначе нужно их очищать или ничего не делать
            state.btnEdtitBankIsClick = false;
        },

        // закрытие диалога
        hideDialog(state) {
            state.dialogVisible = false;

            // Востанавливаем кнопки по умолчанию
            // скрываем кнопку создания банка
            state.btnCreateBankVisible = true;

            // показываем кнопку редактирования банка
            state.btnEditBankVisible = false;
        },
    },
    actions: {},
    modules: {}
})
