# mortgage-calculator-vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### SERHII COMENTS
### VUE CLI - How to import scripts and styles
See [Reference](https://stackoverflow.com/questions/52671245/vue-cli-how-to-import-scripts-and-styles).

Using the vue-cli v4, go to your main.js file and add the imports of your js/css files like this
```
import '@/assets/main.js'
import '@/assets/main.css'
```
Например подключаем normalize.css

```
import '@/assets/css/normalize.css'
```

### main.js - подключение стилей котопые находятся в Node modules
See [Configuration Reference](https://github.com/necolas/normalize.css).
```
npm install --save normalize.css

import 'normalize.css/normalize.css'
```




