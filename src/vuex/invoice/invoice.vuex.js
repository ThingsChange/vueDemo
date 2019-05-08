// 禁用 eslint
/* eslint-disable */

import initState from './initialState';
import {
    init_invoice_details_params,
} from './constant';

export const State = initState;
export const Actions = {};
export const Mutations = {};
export const Getter = {};

Mutations[init_invoice_details_params] = (state, opts) => { // 发票详情接口参数
    state.invoiceDetailsParams = opts;
};

