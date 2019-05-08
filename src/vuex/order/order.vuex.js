// 禁用 eslint
/* eslint-disable no-param-reassign */
// import Vue from 'vue';
import initState from './initialState';
import {
    init_order_detail,
    init_order_list_params,
    set_load_page_number,
    set_refresh_page_number,
    init_already_order,
} from './constant';

export const State = initState;
export const Actions = {};
export const Mutations = {};
export const Getter = {};

Mutations[init_order_detail] = (state, orderDetail) => {
    state.orderDetail = orderDetail;
    state.shop = orderDetail.shop;
    state.customer = orderDetail.customer;
};

// 订单列表接口参数
Mutations[init_order_list_params] = (state, opts) => {
    state.orderListParams = opts;
};

Mutations[set_load_page_number] = (state, status) => {
    if (state.orderListParams.queryStatus === status) {
        state.orderListParams.pageNumber += 1;
    }
};

Mutations[set_refresh_page_number] = (state) => {
    state.orderListParams.pageNumber = 1;
};

Mutations[init_already_order] = (state, orderDetail) => {
    state.orderDetail = orderDetail;
    state.shop = orderDetail.shop;
};
