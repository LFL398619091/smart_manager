<template>
  <span v-text="titleStrs"></span>
</template>

<script>
export default {

  name: 'nav',

  data () {
    return {
      titles: [
        '智能硬件',
        '设施设备'
      ]
    };
  },
  computed: {
    titleStrs: function () {
      let len = this.titles.length;
      let resTitle = '';
      if (len) {
        this.titles.forEach(function (item, index) {
          if (index !== (len - 1)) {
            resTitle += (item + '-');
          } else {
            resTitle += item;
          }
        });
      }
      // console.log(vuexCfg.store.count);
      return resTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>