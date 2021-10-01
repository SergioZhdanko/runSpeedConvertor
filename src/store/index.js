import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resultList: [],
    }, // хранилище данных

    mutations: {}, // методы позволяющие менять данные в хранилище

    getters: {}, // методы для получения данных из хранилища

    actions: {}, // функции для обращения на сервер, и после получения данных запускают мутации
});