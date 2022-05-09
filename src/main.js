import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Serhii import собственные стили
import '@/assets/css/normalize.css'

// Serhii import from node modules
// import 'normalize.css/normalize.css'

// {1} глобальная регистрация компонентов (сокращенный вариант)
// импортируем файл с UI компонетами
import components from './components/UI'

const app = createApp(App);

// {2} глобальная регистрация компонентов (сокращенный вариант)
let allMyComponents = Object.values(components);
allMyComponents.forEach(component => {
    app.component(component.name, component);
});

app.use(store).use(router).mount('#app');
