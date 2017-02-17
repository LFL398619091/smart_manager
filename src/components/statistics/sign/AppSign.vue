<template>
    /*根节点begin*/
    <div>
      <v-nav></v-nav>
      <span v-text="localCount"></span>


    </div>/*根节点end*/
</template>

<script>
import nav from 'components/content/nav';
// 使用mapState简化computed属性写法
// import {mapState, mapGetters} from 'vuex';
export default {
  name: 'AppSign',

  data () {
    return {
      content: 'app/sign'
    };
  },
  created () {
  },
  components: {
    'v-nav': nav
  },
  computed: {
    localCount () {
      return -1;
    }
  }
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   name: 'name'
  // })
};
</script>

<style lang="scss" scoped>
 ul {
  list-style: none;
 }
</style>
