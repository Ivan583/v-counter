import {
    stat
} from "fs";

export default {
    actions: {
        increment(ctx, payload) {
            ctx.commit('increment', payload = 1);
        },
        decrement(ctx, payload) {
            ctx.commit('decrement', payload = 1);
        }
    },

    mutations: {
        increment(state, payload) {
            state.counter += payload;
        },
        decrement(state, payload) {
            state.counter -= payload;
        }
    },

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
