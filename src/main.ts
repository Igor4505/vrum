import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// ========== Vee validate ==========
import { extend, localize } from 'vee-validate';
import { required, email, min, confirmed, max } from 'vee-validate/dist/rules';
import pt_BR from './utils/validate-PT_BR.json';

// rules.
extend('required', required);
extend('email', email);
extend('min', min);
extend('confirmed', confirmed);
extend('max', max);
extend('min', min);

// Install English and Arabic localizations.
localize({
    pt_BR: {
        messages: pt_BR.messages
    }
});
localize('pt_BR');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
