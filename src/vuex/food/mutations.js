/* eslint-disable */
const mutations = {};

mutations['set_food_list'] = (state, payload) => {
    state.foodList = payload.foodCategories;
    return state;
}

mutations['set_food_map'] = (state, payload) => {
    state.foodMap = payload;
    return state;
}

export default mutations;
