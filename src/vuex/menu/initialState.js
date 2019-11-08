export default {
  foodDetailName: '', // 菜品详情店铺名称
  isShowSpecificationModel: false, // 是否显示规格弹层
  // isShowShopCartBox: false, // 是否显示购物车盒子
  isShowSetMealModel: false, // 是否显示套餐弹层

  elLeft: 0, // 所点击的加号按钮位置 left
  elBottom: 0, // 所点击的加号按钮位置 bottom
  shopTopHeight: 0, // 商铺页面高度
  showMoveDot: [], // 用来生成小圆点的数组

  moveInCart: false, // 判定小圆点是否已经进入了购物车图标
  selectedFoods: {}, // 云端购物车
  shopCartAcount: 0, // 购物车总金额
  exitSelectedFoods: {}, // 修改后购物车中的食物
  currentFood: {}, // 当前选择的菜品
  menuList: {}, // 商户信息和商品列表
  shopDetail: {
    promotionSimpleList: [],
    shopImages: [],
    shopName: '',
    opening: true
  }, // 商户信息
  shopBaseSetting: {}, // 商铺基本设置信息
  takeAwaySetting: {}, // 外卖设置
  justEatSetting: {}, // 闪吃设置
  reserveSetting: {}, // 预定设置
  takeOutSetting: {}, // 自提设置
  spotSetting: {}, // 堂食自助设置
  groupBaseSetting: {}, // 集团配置信息
  orderFoodSetting: {}, // 点菜设置
  cardInfoList: {}, // 会员卡列表
  params: {}, // 接口请求参数
  // foodList: {}, // 把所有食物格式化到对象里
  // searchFood: [], // 用于搜索食物的数组

  isShowEatTime: false, // 是否显示就餐时间

  pickUpDate: '', // 自提，外送，预定，闪吃日期
  pickUpTime: '', // 自提，外送，预定，闪吃时间
  eatPersonNum: '', // 预定，闪吃人数
  tableNum: '', // 堂食扫码获取的桌台号
  pickDeliveryMoney: 0, // 外卖配送费

  discountCount: 0, // 营销活动金额
  vipDisCount: 0, // 会员营销金额
  couponCount: 0, // 优惠券金额
  confirmOrderAcount: 0, // 确认订单金额
  confirmPayAcount: 0, // 确认支付金额
  isShowCoupons: false, // 是否显示彩蛋猫优惠券

  vipCards: [], // 会员卡列表
  promotionWrappers: [], // 会员卡对应的营销包
  selectedCard: {}, // 被选择使用的会员卡
  vipAcount: 0, // 剩余支付金额
  vipMoney: 0, // 会员卡支付金额
  integralMoney: 0, // 积分支付金额

  // realTimeMarket: '', // 实时营销信息
  // isShowMarketing: false, // 是否显示实时营销信息
  // takeoutPackingFee: 0, // 打包费

  coupons: [], // 与营销活动共享的优惠券

  isShowInsufficientInventory: false, // 是否展示库存不足提示页面

  inventoryMessages: [], // 库存异常提示信息

  categoryNum: [], // 被选菜品类别数量

  isAgainFood: false, // 是否再来一单
  quickPayRemark: '', // 闪付备注

  isMorePeople: false, // 是否多人点餐
  foodHintInfo: {}, // 当前菜品提示信息
  isShowMorePeopleShowCartBox: false, // 菜品删除弹窗显示状态
  selectedAlikeFood: [], // 多个人选的同一种菜
  selectedFoodsByCategory: {}, // 云端购物车按分类分组
  morePersonSelectedFood: {}, // 同一食物根据不同人分组，适用于多人点餐
  reductionFood: [], // 多人点餐减该菜品时的所有人点过改菜的列表

  isShowrealTimeMarket: true, // 是否隐藏实时营销

  storeSetValue: {}, // 会员卡套餐储值对象
  storeSetList: [], // 会员卡套餐储值中的套餐列表
  selectedStoreSet: {}, // 被选中的套餐
  giftFoods: [], // 营销赠品
  foodPromotions: [], // 赠品列表
  isShowMorePeopleShowCart: false, // 是否显示多人点餐购物车

  isShowMadeDishModel: false, // 显示拼盘弹层
  assemblyRecommendList: [], // 猜你喜欢菜品列表
  isShowRecommend: false, // 猜你喜欢显示状态
  showNormalLode: false // load显示状态
}
