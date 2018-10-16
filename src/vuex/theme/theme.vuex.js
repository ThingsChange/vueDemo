// 禁用 eslint
/* eslint-disable no-param-reassign */

import initState from './initialState';
import {
  change_main_bg_color
} from './constant';

export const State = initState;
export const Actions = {};
export const Mutations = {};
export const Getter = {};

Mutations[change_main_bg_color] = (state, color) => {
  console.log(state, color);
  state.mainColor = color;
};
