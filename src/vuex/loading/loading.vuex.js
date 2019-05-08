// 禁用 eslint
/* eslint-disable no-param-reassign */

// import Vue from 'vue';
import initState from './initialState';
import {
    set_loading,
    set_request_params,
    set_show_loading,
    set_overtime_loading,
    hide_loading,
    show_loading,
    hide_save_loading,
    show_save_loading,
    set_sass_offline_loading,
    init_loading,
    set_invalidQRCode_loading,
} from './constant';

export const State = initState;
export const Actions = {};
export const Mutations = {};
export const Getter = {};
// 隐藏加载页面
Mutations[set_loading] = (state, record) => {
    state.isShowLoading = true;
    if (record) {
        if (record.businessType === 1 && record.saasStatus && !record.saasStatus.online) {
            state.loading = false;
            state.sassOffLine = true;
            state.invalidQRCode = false;
            state.haveFood = false;
            state.overTime = false;
        } else if (record.businessType !== 1 && record.saasStatus && !record.saasStatus.online && record.saasStatus.offlineTime > 36 * 60 * 60 * 1000) {
            state.loading = false;
            state.sassOffLine = true;
            state.invalidQRCode = false;
            state.haveFood = false;
            state.overTime = false;
        } else {
            state.isShowLoading = false;
        }
    }
};
// 隐藏加载页面
Mutations[set_sass_offline_loading] = (state, record) => {
    if (record) {
        if (record.businessType === 1 && record.saasStatus && !record.saasStatus.online) {
            state.loading = false;
            state.sassOffLine = true;
            state.invalidQRCode = false;
            state.haveFood = false;
            state.overTime = false;
        } else if (record.businessType !== 1 && record.saasStatus && !record.saasStatus.online && record.saasStatus.offlineTime > 36 * 60 * 60 * 1000) {
            state.loading = false;
            state.sassOffLine = true;
            state.invalidQRCode = false;
            state.haveFood = false;
            state.overTime = false;
        }
    }
};
// 设置从页面url中获取到的参数
Mutations[set_request_params] = (state, requestParams) => {
    state.requestParams = requestParams;
};

// 显示加载页面
Mutations[set_show_loading] = (state, isShow) => {
    state.isShowLoading = isShow;
};

// 显示加载超时页面
Mutations[set_overtime_loading] = (state) => {
    state.isShowLoading = true;
    state.loading = false;
    state.sassOffLine = false;
    state.invalidQRCode = false;
    state.haveFood = false;
    state.overTime = true;
};

// 显示无效二维码页面
Mutations[set_invalidQRCode_loading] = (state) => {
    state.isShowLoading = true;
    state.loading = false;
    state.sassOffLine = false;
    state.invalidQRCode = true;
    state.haveFood = false;
    state.overTime = false;
};

// 初始化加载页面
Mutations[init_loading] = (state) => {
    state.isShowLoading = true;
    state.loading = true;
    state.sassOffLine = false;
    state.invalidQRCode = false;
    state.haveFood = false;
    state.overTime = false;
};

// 显示大LOADING界面
Mutations[show_loading] = (state) => {
    state.ShowLoading = true;
};

// 隐藏大LOADING界面
Mutations[hide_loading] = (state) => {
    state.ShowLoading = false;
};

// 隐藏小lOADING界面
Mutations[hide_save_loading] = (state) => {
    state.saveLoading = false;
};

// 显示小LOADING界面
Mutations[show_save_loading] = (state) => {
    state.saveLoading = true;
};
