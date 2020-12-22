import {
    stat
} from "fs";

export default {
    actions: {},
    mutations: {},
    state: {
        title: 'Vuex App',
        subtitle: 'Use our application',
        counter: 0
    },
    getters: {
        title(state) {
            return state.title;
        },
        subtitle(state) {
            return state.subtitle.toUpperCase();
        },
        counter(state) {
            return state.counter;
        }
    }
}
