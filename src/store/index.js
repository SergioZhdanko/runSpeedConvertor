import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resultList: [],
    }, // хранилище данных

    mutations: {
        setResultListData(state, payload) {
            state.resultList = payload;
        }
    }, // методы позволяющие менять данные в хранилище

    getters: {
        getResultList: state => state.resultList,
        getSumOfDistance: state => {
            return state.resultList.reduce((sum, cur) => sum + cur.distance, 0)
        },
        getSumOfTime: state => {
            let allMin = state.resultList.map((item) => parseInt(item.speedOneKmPerMinute));
            let allSec = state.resultList.map((item) => (item.speedOneKmPerMinute * 100) % 100);
            let sumOfMin = allMin.reduce((sum, cur) => sum + cur, 0);
            let sumOfSec = allSec.reduce((sum, cur) => sum + cur, 0);
            sumOfMin += (sumOfSec - (sumOfSec % 60)) / 60;
            sumOfSec %= 60;
            return sumOfMin + sumOfSec / 100;
        }
    }, // методы для получения данных из хранилища

    actions: {}, // функции для обращения на сервер, и после получения данных запускают мутации
});