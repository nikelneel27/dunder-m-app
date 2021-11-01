import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        dependentsCount: "0",
        annualValue: "20,400"
    },
    mutations: {

    },
    actions: {
        incrementDependent() { },
        decrementDependent() { }

    },
    getters: {

    }
})