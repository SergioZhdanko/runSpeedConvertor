import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {}, // хранилище данных

    mutations: {}, // методы позволяющие менять данные в хранилище

    getters: {}, // методы для получения данных из хранилища

    actions: {}, // функции для обращения на сервер, и по сле получения данных запускают мутации
});