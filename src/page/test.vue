<template>
  <div>
    <div class='layout-breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>数据维度</BreadcrumbItem>
        <BreadcrumbItem to='/dimensionList'>维度管理</BreadcrumbItem>
        <BreadcrumbItem>维度详情</BreadcrumbItem>
      </Breadcrumb>
      <div class='layout-content' v-if="!modifyFlag">
        <div class='layout-content-main bg-aliceblue' >
          <Form ref="modifyItemsValdate" :model="indicatorItem" :rules="ruleValidate"  :label-width="100">
            <Row>
              <Col span="8">
                <FormItem label="指标名 ：" prop="aduitType"><span></span> {{indicatorItem.name}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="8">
                <FormItem label="字段 ：" prop="aduitType"><span></span> {{indicatorItem.field.fieldName}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="8">
                <FormItem label="一级分类 ：" prop="aduitType"><span></span> {{indicatorItem.firstCategory}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="8">
                <FormItem label="二级分类 ：" prop="aduitType"><span></span> {{indicatorItem.secondCategory}}</FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="8">
                <FormItem label="量化分类 ：" prop="aduitType"><span></span> {{indicatorItem.qualityCategory}}</FormItem>
              </Col>
            </Row>

            <Row v-for="(item,index) in indicatorItem.dimensions " :key="item.id">
              <Col span="8">
                <FormItem  :label="'维度' +(index+1) +'：'" prop="aduitType"><span></span> {{item.dimensionName}}</FormItem>
              </Col>
              <Col span="8">
                <span ></span>纬度值 : <span> {{item.valueName}}</span>
              </Col>
            </Row>

            <Row>
              <Col span="20">
                <FormItem label="指标类型 ：" prop="type"><span></span> {{indicatorItem.type|indicatorTypeConstant}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="20">
                <FormItem label="指标编码 ：" prop="type"><span></span> {{indicatorItem.code}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="20">
                <FormItem label="指标定义 ：" prop="type"><span></span> {{indicatorItem.description}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="20">
                <FormItem label="指标目的 ：" prop="type"><span></span> {{indicatorItem.purpos}}</FormItem>
              </Col>
            </Row>
            <Row v-for="(item,index) in indicatorItem.relyQuotas" :key="item.id">
              <Col span="20">
                <FormItem label="相关指标 ：" prop="type"><span></span> {{item.quotaName}}</FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="20">
                <FormItem label="系统逻辑 ：" prop="aduitType"><div> {{indicatorItem.systemLogic}}</div></FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="20">
                <FormItem label="指标结果 ：" prop="aduitType"><div> {{indicatorItem.quotaResult}}</div></FormItem>
              </Col>
            </Row>
          </Form>
        </div>
        <Row>
          <Col span="4"><Button type="primary" @click="modify">编辑</Button></Col>
          <Col span="4"><Button type="primary" @click="close">关闭</Button></Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import indicatorAPI from '../../api/indicator';
import { indicatorTypeConstant } from '../../common/dataConstant';
export default {
  data() {
    return {
      index: 1,
      modifyFlag: false,
      formItem: {
        valueName: '',
        valueCode: '',
        description: '',
        systemLogic: '',
        name: '',
        code: '',
        version: '',
      },
      indicatorItem: {
        valueName: '',
        valueCode: '',
        description: '',
        systemLogic: '',
        name: '',
        code: '',
        firstCategory: '',
        secondCategory: '',
        relyQuotas: [],
        field: {},
      },
      ruleValidate: {
        name: [{ required: true, message: '维度名不允许为空', trigger: 'blur' }],
        code: [{ required: true, message: '维度编码不允许为空', trigger: 'change' }],
      },
    };
  },
  filters: {
    indicatorTypeConstant: indicatorTypeConstant,
  },
  methods: {
    modify() {
      this.$router.push({
        name: 'indicatorModify',
        params: { id: this.$router.currentRoute.params.id },
      });
    },
    close() {
      this.$router.push({ name: 'indicatorList' });
    },
    handleAdd() {
      this.index++;
      this.indicatorItem.items.push({
        value: '',
        valueIndex: this.index,
        status: 1,
      });
    },
    handleRemove(index) {
      this.indicatorItem.items[index].status = 0;
    },
    submitAudit() {
      this.$refs['addItemsValdate'].validate(valid => {
        if (valid) {
          dimensionAPI.addItem(this.indicatorItem).then(res => {
            if (res.data.code === 1 && res.data.msg === 'SUCCESS') {
              this.$Message.success({
                content: '添加成功~~',
                duration: 3,
              });
              this.$router.push({ path: '/dimensionVerifyList' });
            }
          });
        } else {
          this.$Message.error('添加失败!');
        }
      });
    },
  },
  mounted() {
    console.log(this.$router.currentRoute.params.id);
    indicatorAPI.queryIndicatorById(this.$router.currentRoute.params.id).then(res => {
      console.log(res.data);
      this.indicatorItem = res.data.data;
    });
  },
};
</script>
<style scoped>
.bg-aliceblue {
  background-color: #aliceblue;
}
.button-go-middle {
  text-align: center;
}
</style>
