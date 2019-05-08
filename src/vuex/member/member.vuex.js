// 禁用 eslint
/* eslint-disable no-param-reassign */

import initState from './initialState';
import {
    init_member_params,
    init_get_card_msg,
    get_card_list,
    // filter_card_draw,
    // edit_card_status,
    set_card_type_params,
    // change_blank_status,
    change_input_itemID,
} from './constant';

export const State = initState;
export const Actions = {};
export const Mutations = {};
export const Getter = {};
// 已领取会员信息
Mutations[init_get_card_msg] = (state, msg) => {
    state.getCardMsg = msg;
};
// 接口请求参数
Mutations[init_member_params] = (state, opts) => {
    state.memberParams = opts;
};

// 获取会员卡列表
Mutations[get_card_list] = (state, memberList) => {
    if (memberList) {
        state.fetchCardAlready = memberList.filter(item => item.isExistsCard);
        state.fetchCardLess = memberList.filter(item => !item.isExistsCard);
    }
};

// 获取会员卡信息
Mutations[set_card_type_params] = (state, cardTypeParams) => {
    state.cardTypeParams = cardTypeParams;
};
// Mutations[filter_card_draw] = (state) => {
//     state.cardAlreadyDraw = [];
//     state.cardNoDraw = [];
//     state.getCardList.forEach((item) => {
//         if (item.isExistsCard === false) { state.cardNoDraw.push(item); } else { state.cardAlreadyDraw.push(item); }
//     });
//     if (state.cardNoDraw.length === 0) state.showBlank = true;
// };

// Mutations[edit_card_status] = (state, cardTypeID) => {
//     state.cardNoDraw.forEach((item, index, arr) => {
//         if (item.cardTypeID === cardTypeID) { arr.splice(index, 1); state.cardAlreadyDraw.unshift(item); }
//     });
//     if (state.cardNoDraw.length === 0) state.showBlank = true;
// };

// Mutations[change_blank_status] = (state, index) => {
//     if (state.cardNoDraw.length === 0 && index === 0) {
//         state.showBlank = true;
//     } else if (state.cardAlreadyDraw.length === 0 && index === 1) {
//         state.showBlank = true;
//     } else {
//         state.showBlank = false;
//     }
// };

Mutations[change_input_itemID] = (state, itemID) => {
    state.isShowInput = itemID
}
