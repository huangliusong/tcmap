<template>
  <div id="app">
    {{msg}}
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
      </li>
    </ul>
    <div>
      <transition
        enter-active-class="animated zoomInLeft"
        leave-active-class="animated zoomOutRight"
      >
        <router-view></router-view>
      </transition>
    </div>
    <h1 @click="toRescue">定位</h1>
    <h2 @click="show">show</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:
        'https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=http://localhost:8080/back&key=OELBZ-IZTWK-HTFJP-ASMK6-SJQRE-RPFMV&referer=myapp'
    }
  },
  methods: {
    toRescue() {
      window.location.href = this.url
    },
    show() {
      console.log('名字   ' + this.$route.query.name)
      console.log('经纬度   ' + this.$route.query.latng)
      console.log('地址   ' + this.$route.query.addr)
      console.log('城市   ' + this.$route.query.city)
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
