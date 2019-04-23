<template>
  <div class="home-page">
    <x-header
      style='background-color:#5eadd6'
    >
      <i class="iconfont iconquanzi"/>发现
      <router-link slot="right" to="/DynamicPublishing">动态</router-link>
      <div slot='overwrite-left'></div>
    </x-header>
    <div class="">

    </div>
    <foo-ter/>
  </div>
</template>

<script>
import axios from 'axios'
import FooTer from '../components/FooTer'
export default {
  name: 'Find',
  components: {
    FooTer
  },
  data () {
    return {
      list: []
    }
  },
  created: function () {
    this.loading()
  },
  methods: {
    loading () {
      axios.get('/api/fand')
      .then(function (res) {
        this.list = res.data
        console.log(this.list)
      }.bind(this))
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
* {
  margin: 0;
  padding: 0;
}
</style>

