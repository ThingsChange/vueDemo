// 禁用 eslint
/* eslint-disable */

import {
    GET_ADDRESS_DATA,
    UNSHIFT_ADDRESS_DATA,
    edit_address_data,
    delete_address_data,
    INIT_ADDRESS_PARAMS,
    get_edit_index,
    default_position_address,
} from './constant';

export const State = {
    getAddress: [],
    AddressParams: {},
    editIndex: null,
};
export const Actions = {
};
export const Mutations = {};
export const Getter = {};

// 初始化数据列表
Mutations[GET_ADDRESS_DATA] = (state, getAddress) => {
    state.getAddress = getAddress;
},

// 新增数据
Mutations[UNSHIFT_ADDRESS_DATA] = (state, newAdd) => {
    state.getAddress.unshift(newAdd);
}

// 获取我的地址页面点击的数组下标
Mutations[get_edit_index] = (state, index) => {
    state.editIndex = index;
}

// 筛选要更改的数据
Mutations[edit_address_data] = (state, payload) => {
    state.getAddress.forEach((item, index, arr) => {
        if (item.itemID === payload.itemID) {
            arr.splice(index, 1, payload.edit);
        }
    });
}

// 修改默认地址的位置
Mutations[default_position_address] = (state, addressID) => {
    state.getAddress.forEach((item, index, arr) => {
        if (item.itemID === addressID) {
            arr.splice(index, 1);
            state.getAddress.unshift(item);
        }
    });
}

// 删除数据
Mutations[delete_address_data] =(state, itemID) => {
    state.getAddress.forEach((item, index, arr) => {
        if (item.itemID === itemID) {
            arr.splice(index, 1);
        }
    });
}
