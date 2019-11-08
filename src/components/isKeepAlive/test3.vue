<template>
  <Content>
    <CheckboxGroup v-model="social">
      <Checkbox label="twitter">
        <Icon type="social-twitter"></Icon>
        <span>Twitter</span>
      </Checkbox>
      <Checkbox label="facebook">
        <Icon type="social-facebook"></Icon>
        <span>Facebook</span>
      </Checkbox>
      <Checkbox label="github">
        <Icon type="social-github"></Icon>
        <span>Github</span>
      </Checkbox>
      <Checkbox label="snapchat">
        <Icon type="social-snapchat"></Icon>
        <span>Snapchat</span>
      </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
  </Content>
</template>
<script>
export default {
  data() {
    return {
      social: ['facebook', 'github'],
      fruit: ['苹果']
    }
  }
}
</script>
