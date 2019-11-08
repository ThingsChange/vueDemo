// 禁用 eslint
/* eslint-disable no-param-reassign */

import Vue from 'vue'
import initState from './initialState'
import { ListToObjInList } from '../../helpers/utils'
import {
  set_food_detail_name,
  show_specification_model,
  hide_specification_model,
  show_setmeal_model,
  hide_setmeal_model,
  show_made_dish_model,
  hide_made_dish_model,
  set_current_add_button_left,
  set_current_add_button_bottom,
  add_move_dot_to_shop_cart,
  clear_move_dot_from_shop_cart,
  toggle_dot_move_in_cart,
  add_sub_meal_totalnum,
  remove_sub_meal_totalnum,
  init_selected_foods,
  init_nenu_list,
  init_shop_detail,
  init_interface_params,
  hide_eat_time,
  show_eat_time,
  pick_up_date,
  pick_up_time,
  pick_delivery_money,
  eat_person_num,
  set_menu_list_top_height,
  set_order_table_num,
  set_discount_count,
  set_vip_discount_count,
  set_coupon_count,
  set_confirm_order_acount,
  set_vip_cards,
  set_promotion_wrappers,
  selected_promotion_wrappers,
  set_vip_cards_status,
  select_vip_cards,
  set_vip_pay_type,
  set_integral_pay_type,
  set_coupon_list,
  set_default_selected_coupon,
  set_checked_coupon,
  set_show_insufficient_inventory,
  init_insufficient_inventory,
  set_again_food,
  init_category_num,
  init_is_again,
  set_quick_pay_remark,
  init_store_set_value,
  select_store_set_value,
  set_gift_food,
  set_gift_list,
  set_checked_gift,
  add_gift,
  sub_gift,
  add_made_dish_to_shop_cart,
  show_assembly_recommend,
  hide_assembly_recommend,
  show_normal_load,
  hide_normal_load,
  init_assembly_recommend_list,
  show_cat_coupons
} from './constant'

export const State = initState
export const Actions = {}
export const Mutations = {}
export const Getter = {}
// 菜单列表
Mutations[init_nenu_list] = (state, menuList) => {
  state.menuList = menuList
  state.shopBaseSetting = menuList.shopSetting.shopBaseSetting
  state.takeAwaySetting = menuList.shopSetting.takeAwaySetting
  state.justEatSetting = menuList.shopSetting.justEatSetting
  state.reserveSetting = menuList.shopSetting.reserveSetting
  state.takeOutSetting = menuList.shopSetting.takeOutSetting
  state.spotSetting = menuList.shopSetting.spotSetting
  state.groupBaseSetting = menuList.shopSetting.groupBaseSetting
  state.cardInfoList = menuList.cardInfoList
}
// 商铺信息
Mutations[init_shop_detail] = (state, shopDetail) => {
  state.shopDetail = shopDetail
}
// 接口请求参数
Mutations[init_interface_params] = (state, opts) => {
  state.params = opts
}
// 设置菜品详情店铺名称
Mutations[set_food_detail_name] = (state, name) => {
  state.foodDetailName = name
}

// 点击选规格按钮
Mutations[show_specification_model] = state => {
  state.isShowSpecificationModel = true
}

// 点击选规格弹层中的关闭按钮
Mutations[hide_specification_model] = state => {
  state.isShowSpecificationModel = false
}

// 点击选套餐按钮
Mutations[show_setmeal_model] = state => {
  state.isShowSetMealModel = true
}
// 点击选套餐关闭按钮
Mutations[hide_setmeal_model] = state => {
  state.isShowSetMealModel = false
}

// 点击选拼盘按钮
Mutations[show_made_dish_model] = state => {
  state.isShowMadeDishModel = true
}

// 点击选拼盘关闭按钮
Mutations[hide_made_dish_model] = state => {
  state.isShowMadeDishModel = false
}

// 显示结算推荐弹窗
Mutations[show_assembly_recommend] = state => {
  state.isShowRecommend = true
}

// 隐藏结算推荐弹窗
Mutations[hide_assembly_recommend] = state => {
  state.isShowRecommend = false
}

// 初始化猜你喜欢推荐菜品列表
Mutations[init_assembly_recommend_list] = (state, list) => {
  state.assemblyRecommendList = list
}

// 显示结算推荐load
Mutations[show_normal_load] = state => {
  state.showNormalLode = true
}

// 隐藏结算推荐load
Mutations[hide_normal_load] = state => {
  state.showNormalLode = false
}

// 点击选套餐弹层中的关闭按钮
Mutations[hide_setmeal_model] = state => {
  state.isShowSetMealModel = false
}

// 设置当前点击的加号按钮据左的位置
Mutations[set_current_add_button_left] = (state, elLeft) => {
  state.elLeft = elLeft
}

// 设置当前点击的加号按钮据下的位置
Mutations[set_current_add_button_bottom] = (state, elBottom) => {
  state.elBottom = elBottom
}

// 点击加号按钮时往生成小圆点的数组中添加一个元素
Mutations[add_move_dot_to_shop_cart] = state => {
  state.showMoveDot.push(true)
}

// 清楚生成小圆点的数组
Mutations[clear_move_dot_from_shop_cart] = state => {
  state.showMoveDot = []
}

// 切换小圆点是否进入购物车的状态
Mutations[toggle_dot_move_in_cart] = state => {
  state.moveInCart = !state.moveInCart
}

// 套餐的子菜单中点击减少时，子菜单库存加相应数量
Mutations[add_sub_meal_totalnum] = (state, selectFood) => {
  selectFood.meal.forEach(item => {
    item.foodSetDetails.forEach(child => {
      if (
        selectFood.count >= 1 &&
        child.count &&
        child.sku !== null &&
        child.sku >= 0
      ) {
        child.sku += child.count
      }
      if (selectFood.count === 1 && child.count) {
        child.count = 0
      }
    })
  })
  Vue.set(state.currentFood, 'foodSetCategories', selectFood.meal)
}
// 套餐的子菜单中点击添加时，子菜单库存减相应数量
Mutations[remove_sub_meal_totalnum] = (state, selectFood) => {
  selectFood.meal.forEach(item => {
    item.foodSetDetails.forEach(child => {
      if (child.count && child.sku !== null && child.sku >= 0) {
        if (child.sku === 0) child.count = 0
        if (selectFood.count >= 1 && child.sku >= child.count)
          child.sku -= child.count
        // child.count = 0;
      }
    })
  })
  Vue.set(state.currentFood, 'foodSetCategories', selectFood.meal)
}

// 把拼盘添加到购物车，初始化库存
Mutations[add_made_dish_to_shop_cart] = (state, selectFood) => {
  selectFood.meal.forEach(item => {
    item.foodSetDetails.forEach(child => {
      if (child.count && child.sku !== null && child.sku >= 0) {
        if (child.sku >= child.count) child.sku -= child.count
      }
      if (child.count) child.count = 0
    })
  })
  Vue.set(state.currentFood, 'foodSetCategories', selectFood.meal)
}
// 把缓存中的数据初始化到selectedFoods中
Mutations[init_selected_foods] = (state, shoppingCartInfo) => {
  if (JSON.stringify(state.menuList) === '{}') return
  state.selectedFoods =
    shoppingCartInfo &&
    shoppingCartInfo.items &&
    shoppingCartInfo.items.length > 0
      ? ListToObjInList(shoppingCartInfo.items)
      : {}
  state.shopCartAcount = 0
  if (Object.keys(state.selectedFoods).length) {
    state.shopCartAcount = Object.keys(state.selectedFoods)
      .map(
        item =>
          state.selectedFoods[item].count *
          state.selectedFoods[item].strikePrice
      )
      .reduce((a, b = 0) => a + b)
  }
  state.exitSelectedFoods = state.selectedFoods
  state.realTimeMarket =
    shoppingCartInfo && shoppingCartInfo.promotionName
      ? shoppingCartInfo.promotionName
      : ''
  state.takeoutPackingFee =
    shoppingCartInfo && shoppingCartInfo.takeoutPackingFee
      ? shoppingCartInfo.takeoutPackingFee
      : 0
  state.menuList.foodCategories.forEach((category, index) => {
    let num = 0
    Object.keys(state.selectedFoods).forEach(key => {
      if (state.selectedFoods[key].foodCategoryID === category.foodCategoryID) {
        num += state.selectedFoods[key].count
      }
    })
    Vue.set(state.categoryNum, index, num)
  })
}

// 点击遮罩层或者叉号关闭时间选择页面
Mutations[hide_eat_time] = state => {
  state.isShowEatTime = false
}

// 点击选择就餐时间或者自提时间显示时间选择页面
Mutations[show_eat_time] = (state, setting) => {
  state.isShowEatTime = true
  state.orderFoodSetting = setting
}

// 设置自提，外送，预定，闪吃日期
Mutations[pick_up_date] = (state, date) => {
  state.pickUpDate = date
}
// 设置自提，外送，预定，闪吃时间
Mutations[pick_up_time] = (state, time) => {
  state.pickUpTime = time
}
// 设置外送配送费
Mutations[pick_delivery_money] = (state, money) => {
  const findStr = money.slice(money.lastIndexOf('('))
  const findPrice = findStr.match(/(\d+)|(^\d+\.\d+?$)/g)
  state.pickDeliveryMoney =
    findPrice.length > 1
      ? Number(`${findPrice[0]}.${findPrice[1]}`)
      : Number(findPrice[0])
}
// 设置就餐人数
Mutations[eat_person_num] = (state, personNum) => {
  state.eatPersonNum = personNum
}

// 设置菜单列表距离页面头部的高度
Mutations[set_menu_list_top_height] = (state, topHeight) => {
  state.shopTopHeight = topHeight
}

// 设置堂食桌台号
Mutations[set_order_table_num] = (state, result) => {
  state.tableNum = result
}

// 设置营销金额
Mutations[set_discount_count] = (state, discountCount) => {
  state.discountCount = discountCount
}

// 设置会员营销金额
Mutations[set_vip_discount_count] = (state, vipDisCount) => {
  state.vipDisCount = vipDisCount
}
// 设置优惠金额
Mutations[set_coupon_count] = (state, couponCount) => {
  state.couponCount = couponCount
}
// 设置确认订单金额
Mutations[set_confirm_order_acount] = (state, totalNum) => {
  state.confirmOrderAcount = totalNum
  state.confirmPayAcount = totalNum
}
// 设置营销信息
Mutations[set_promotion_wrappers] = (state, promotion) => {
  state.promotionWrappers = promotion
}
// 是否选择积分抵扣
Mutations[set_integral_pay_type] = (state, payNum) => {
  state.integralMoney = payNum
  if (state.confirmPayAcount && payNum) state.confirmPayAcount -= payNum
}

// 是否选择会员卡支付
Mutations[set_vip_pay_type] = (state, vipPrice) => {
  state.vipAcount = vipPrice.price
  state.vipMoney = vipPrice.cardBalance
  const allVipAcount =
    state.selectedCard.pointBalance * state.selectedCard.pointExchangeRate +
    state.selectedCard.cardBalance
  if (
    allVipAcount < state.confirmOrderAcount &&
    state.selectedCard.cardStatus === 10
  )
    state.selectedCard.cardNotCanUsingNotes = '余额不足'
}

// 获取会员卡列表
Mutations[set_vip_cards] = (state, cards) => {
  state.vipCards = cards
  state.selectedCard = state.vipCards.filter(item => {
    if (item.checked) return true
    return false
  })[0]
}

// 根据支付金额判断会员卡列表中卡状态
Mutations[set_vip_cards_status] = state => {
  state.vipCards.forEach(card => {
    const allVipAcount =
      card.pointBalance * card.pointExchangeRate + card.cardBalance
    if (allVipAcount < state.confirmOrderAcount && card.cardStatus === 10)
      card.cardNotCanUsingNotes = '余额不足'
  })
}

// 选择会员卡
Mutations[select_vip_cards] = (state, key) => {
  state.vipCards[key].checked = true
  state.vipCards.forEach((item, index) => {
    if (index !== key) {
      item.checked = false
    }
  })
  state.selectedCard = state.vipCards[key]
  state.integralMoney = 0
  state.vipMoney = 0
  state.confirmPayAcount = state.confirmOrderAcount
}

// 选择优惠方式
Mutations[selected_promotion_wrappers] = (state, pro) => {
  const { index, curItem, promotion } = pro
  state.promotionWrappers[index].checked = true
  state.promotionWrappers.forEach((item, wrappindex) => {
    const obj = item
    if (wrappindex !== index) obj.checked = false
  })
  if (curItem && curItem.length > 0) {
    const price = curItem
      .map(acountItem => acountItem.promotionAmount)
      .reduce((a, b = 0) => a + b)
    state.discountCount = price
  }
  if (promotion.vipInfos && promotion.vipInfos.length > 0) {
    const price = promotion.vipInfos
      .map(acountItem => acountItem.promotionAmount)
      .reduce((a, b = 0) => a + b)
    state.vipDisCount = price
  }
  state.foodPromotions = state.promotionWrappers[index].foodPromotions
}

// 设置与营销活动共享的优惠券
Mutations[set_coupon_list] = (state, couponList) => {
  state.coupons = couponList && couponList.length > 0 ? couponList : []
}
// 设置不选用优惠券
Mutations[set_default_selected_coupon] = (state, defaultUsed) => {
  state.coupons.forEach(item => {
    Vue.set(item, 'checked', defaultUsed)
  })
}
Mutations[show_cat_coupons] = (state, isShow) => {
  state.isShowCoupons = isShow
}
// 选择优惠券
Mutations[set_checked_coupon] = (state, key) => {
  Vue.set(state.coupons[key], 'checked', !state.coupons[key].checked)
}

// 关闭库存不足提醒
Mutations[set_show_insufficient_inventory] = (state, isShow) => {
  state.isShowInsufficientInventory = isShow
}

// 库存异常信息
Mutations[init_insufficient_inventory] = (state, inventoryMessages) => {
  state.inventoryMessages =
    inventoryMessages && inventoryMessages.length > 0 ? inventoryMessages : []
  if (inventoryMessages && inventoryMessages.length > 0)
    state.isShowInsufficientInventory = true
}

// 把再来一单数据到selectedFoods中
Mutations[set_again_food] = (state, shoppingCartInfo) => {
  state.selectedFoods =
    shoppingCartInfo &&
    shoppingCartInfo.items &&
    shoppingCartInfo.items.length > 0
      ? ListToObjInList(shoppingCartInfo.items)
      : {}
  state.exitSelectedFoods = state.selectedFoods
  if (Object.keys(state.selectedFoods).length) {
    state.shopCartAcount = Object.keys(state.selectedFoods)
      .map(
        item =>
          state.selectedFoods[item].count *
          state.selectedFoods[item].strikePrice
      )
      .reduce((a, b = 0) => a + b)
  }
  state.realTimeMarket =
    shoppingCartInfo && shoppingCartInfo.promotionName
      ? shoppingCartInfo.promotionName
      : ''
  state.takeoutPackingFee =
    shoppingCartInfo && shoppingCartInfo.takeoutPackingFee
      ? shoppingCartInfo.takeoutPackingFee
      : 0
  state.inventoryMessages =
    shoppingCartInfo &&
    shoppingCartInfo.inventoryMessages &&
    shoppingCartInfo.inventoryMessages.length > 0
      ? shoppingCartInfo.inventoryMessages
      : []
  if (
    shoppingCartInfo.inventoryMessages &&
    shoppingCartInfo.inventoryMessages.length > 0
  )
    state.isShowInsufficientInventory = true
  state.isAgainFood = true
}

// 把再来一单数据到selectedFoods中
Mutations[init_is_again] = state => {
  state.isAgainFood = false
}

// 初始化已选食物的类别数量
Mutations[init_category_num] = state => {
  if (JSON.stringify(state.menuList) === '{}') return
  state.menuList.foodCategories.forEach((category, index) => {
    let num = 0
    if (state.isMorePeople && state.selectedFoodsByCategory) {
      Object.keys(state.selectedFoodsByCategory).forEach(key => {
        state.selectedFoodsByCategory[key].forEach(item => {
          if (item.foodCategoryID === category.foodCategoryID) {
            num += item.count
          }
        })
      })
    } else {
      Object.keys(state.selectedFoods).forEach(key => {
        if (
          state.selectedFoods[key].foodCategoryID === category.foodCategoryID
        ) {
          num += state.selectedFoods[key].count
        }
      })
    }
    Vue.set(state.categoryNum, index, num)
  })
}

// 设置闪付收银台备注
Mutations[set_quick_pay_remark] = (state, orderRemark) => {
  state.quickPayRemark = orderRemark
}

// 初始化套餐储值数据
Mutations[init_store_set_value] = (state, storeSetValue) => {
  state.storeSetValue = storeSetValue || {}
  state.storeSetList =
    (storeSetValue && storeSetValue.saveMoneySetResList) || []
  state.storeSetList.forEach((item, index) => {
    const obj = item
    obj.index = index
    return obj
  })
  state.selectedStoreSet =
    (state.storeSetList.filter(item => item.recommendSaveMoneyPolicy).length &&
      state.storeSetList.filter(item => item.recommendSaveMoneyPolicy)[0]) ||
    {}
}

// 选择套餐储值
Mutations[select_store_set_value] = (state, index) => {
  if (index === 'noStore') {
    state.storeSetList.forEach(item => {
      Vue.set(item, 'recommendSaveMoneyPolicy', false)
    })
  } else {
    Vue.set(state.storeSetList[index], 'recommendSaveMoneyPolicy', true)
    state.storeSetList.forEach((item, storeindex) => {
      if (storeindex !== index) Vue.set(item, 'recommendSaveMoneyPolicy', false)
    })
  }
  state.selectedStoreSet =
    (state.storeSetList.filter(item => item.recommendSaveMoneyPolicy).length &&
      state.storeSetList.filter(item => item.recommendSaveMoneyPolicy)[0]) ||
    {}
}

// 设置赠品
Mutations[set_gift_food] = state => {
  // if (obj.checked) state.giftFoods.push(obj.curFood);
  // if (!obj.checked && JSON.stringify(obj.curFood) !== '{}') {
  //     state.giftFoods.forEach((item, index) => {
  //         if (item.foodName === obj.curFood.foodName && item.unit === obj.curFood.unit) state.giftFoods.splice(index, 1);
  //     });
  // }
  if (state.foodPromotions.length > 0) {
    state.giftFoods = []
    state.foodPromotions.forEach(item => {
      item.optionalFoodInfo.items.forEach(subitem => {
        if (subitem.count) {
          state.giftFoods.push(subitem)
        }
      })
    })
  } else {
    state.giftFoods = []
  }
}
// 设置赠品
Mutations[set_gift_list] = (state, obj) => {
  state.foodPromotions = (obj && obj.length > 0 && obj) || []
  if (state.foodPromotions.length > 0) {
    state.giftFoods = []
    state.foodPromotions.forEach(item => {
      item.optionalFoodInfo.items.forEach(subitem => {
        if (subitem.checked) {
          state.giftFoods.push(subitem)
        }
      })
    })
  } else {
    state.giftFoods = []
  }
}
// 选中赠品
Mutations[set_checked_gift] = (state, obj) => {
  state.foodPromotions[obj.index].optionalFoodInfo.items.forEach(
    (item, subIndex) => {
      if (obj.subIndex === subIndex) item.checked = !item.checked
    }
  )
}
// 加赠品
Mutations[add_gift] = (state, obj) => {
  state.foodPromotions[obj.index].optionalFoodInfo.items.forEach(
    (item, subIndex) => {
      if (obj.subIndex === subIndex) {
        item.count += 1
        item.checked = true
      }
    }
  )
}
// 减赠品
Mutations[sub_gift] = (state, obj) => {
  state.foodPromotions[obj.index].optionalFoodInfo.items.forEach(
    (item, subIndex) => {
      if (obj.subIndex === subIndex) item.count -= 1
      if (item.count < 1) item.checked = false
    }
  )
}
