<template>
  <div>
    姓名:<input type="name" v-model="name">
    年龄:<input type="age" v-model="age"><br/>
    姓名:<span>{{name}}</span><br/>
    年龄:<span>{{age}}</span><label :style="{color: myColor}" v-text="ageText"></label><br/>
    <span v-bind:title="title" v-on:click="changeTitle">点击，查看效果</span><br/>
    <span :style="{color: color}">带有颜色的文字</span><input type="color" v-model="color">
    <!-- 循环begin -->
    <ul>
      <li v-for="user in users">
        {{user.name}}
      </li>
    </ul><!-- 循环end -->
  </div>
</template>

<script>
export default {

  name: 'PCSign',

  data () {
    return {
      name: '李四',
      age: 18,
      title: '未点击',
      color: 'red',
      users: [
        {
          name: '张三'
        },
        {
          name: '王五'
        },
        {
          name: '旺财'
        }
      ]
    };
  },
  created () {
    console.log('pcsign created');
  },
  computed: {
    isIllegal () {
      if (this.age >= 18) {
        return false;
      } else {
        return true;
      }
    },
    ageText () {
      if (this.isIllegal) {
        return '非法的';
      } else {
        return '合法的';
      }
    },
    myColor () {
      if (this.isIllegal) {
        return 'red';
      } else {
        return 'blue';
      }
    }
  },
  methods: {
    changeTitle () {
      this.title = '点击了';
    }
  }
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }
</style>