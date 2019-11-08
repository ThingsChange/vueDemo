<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <Upload
        ref="upload"
        :before-upload="handleUpload"
        :action="uploadUrl"
        :data="excelMark"
        :format="acceptType"
        :on-success="uploadSuccess2"
        :on-format-error="handleFormatError"
      >
        <Button type="ghost" icon="ios-cloud-upload-outline"
          >选择要导入的文件</Button
        >
        <div v-if="file !== null">
          文件路径: {{ file.name }}
          <Button
            type="text"
            @click.native.stop="upload"
            :loading="loadingStatus"
            >{{ loadingStatus ? '上传中' : '确认导入' }}</Button
          >
        </div>
      </Upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      acceptType: ['xls'],
      uploadUrl:
        'admin.che001.com/backend-dfb/{这里面是电商的中间域名}/importExcel/电商的请求路径 ',
      file: null,
      loadingStatus: false,
      excelMark: {
        mark: '我是对excel的补充说明',
        token: '1111111111111111111111111'
      }
    }
  },
  methods: {
    handleFormatError(file) {
      console.log(file.type)
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: `文件${file.name}格式不正确，请上传${this.acceptType.join(
          '、'
        )}格式的图片。`
      })
    },
    handleUpload(file) {
      console.log(file)
      let isRight = this.acceptType.includes(file.name.split('.').pop())
      if (isRight) {
        this.file = file
      } else {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: `文件${file.name}格式不正确，请上传${this.acceptType.join(
            '、'
          )}格式的图片。`
        })
      }
      return false
    },
    uploadSuccess2(res, file) {
      console.log(res, file)
    },
    upload() {
      this.loadingStatus = true
      this.$refs.upload.post(this.file)
    }
  }
}
</script>

<style scoped></style>
