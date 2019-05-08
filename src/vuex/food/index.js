import store from '../../vuex';
import state from './state';
import mutations from './mutations';

export const name = 'shop';

store.registerModule(name, { state, mutations });
