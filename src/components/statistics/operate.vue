<template>
  <div>
    <el-upload
  action="//jsonplaceholder.typicode.com/posts/"
  type="drag"
  :thumbnail-mode="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :default-file-list="fileList">
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-button type="primary" @click="changeName">修改名字</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList);
        this.$store.commit('reduce');
        this.$store.commit('changePerson');
      },
      handlePreview (file) {
        console.log(file);
        this.$store.commit('increment');
      },
      onStart () {
        console.log('upload start');
      },
      changeName () {
        this.$store.commit('changeName');
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>