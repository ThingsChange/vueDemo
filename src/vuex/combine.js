/**
 * created by sunkuiwei
 */

/**
 * 因将 vuex 分拆, 故在此合并各个模块的 state, getters, actions, mutations
 * 参数为各模块的 vuex 对象, State, Getter, Actions, Mutations, 分别对应 state, getters, actions, mutations
 * 结果为所有模块的 state, getters, actions, mutations
 */
import objectAssign from 'object-assign';

const combine = (...args) => {
  const isDev = process.env.NODE_ENV === 'development';

  const state = {};
  const getters = {};
  const actions = {};
  const mutations = {};

  args.forEach((vuex) => {
    const { Getters = {}, Actions = {}, Mutations = {}, State = {} } = vuex;
    /**
         * 开发环境监测 state, getters, actions, mutations 是否存在相同的属性名, 生产环境省略此步骤，直接合并
         */
    if (isDev) {
      Object.keys(State).forEach((key) => {
        if (state[key]) throw new Error(`${key} : state should has the unique propties`);
        state[key] = State[key];
      });

      Object.keys(Getters).forEach((key) => {
        if (getters[key]) throw new Error(`${key} : getters should has the unique method`);
        getters[key] = Getters[key];
      });

      Object.keys(Actions).forEach((key) => {
        if (actions[key]) throw new Error(`${key} : actions should has the unique method`);
        actions[key] = Actions[key];
      });

      Object.keys(Mutations).forEach((key) => {
        if (mutations[key]) throw new Error(`${key} : mutations should has the unique method`);
        mutations[key] = Mutations[key];
      });
    } else {
      objectAssign(state, State);
      objectAssign(getters, Getters);
      objectAssign(actions, Actions);
      objectAssign(mutations, Mutations);
    }
  });

  return { state, getters, actions, mutations };
};

export default combine;
