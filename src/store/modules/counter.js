export default {
    actions: {
        increment(ctx, payload) {
            ctx.commit('increment', payload = 5);
        },
        decrement(ctx, payload) {
            ctx.commit('decrement', payload = 10);
        },
        reset(ctx) {
            ctx.commit('reset');
        }
    },

    mutations: {
        increment(state, payload) {
            state.counter += payload;
        },
        decrement(state, payload) {
            state.counter -= payload;
        },
        reset(state) {
            state.counter = 0;
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
