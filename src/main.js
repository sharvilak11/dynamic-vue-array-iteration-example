import App from './App.vue';
import Vue from 'vue';

Vue.config.productionTip = false;
import('bootstrap/scss/bootstrap.scss');

new Vue({
    render: h => h(App),
}).$mount('#app');
