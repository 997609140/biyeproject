<template>
  <div class="home-page">
    <x-header style='background-color:#5eadd6'>动态发布</x-header>
    <div class="aynamic">
      <x-input
        placeholder="标题"
        v-model="from_aynamic.aynamicname"
        name="aynamicname"
      />
      <x-textarea
        :max="300"
        name="aynamic"
        v-model="from_aynamic.aynamic"
        placeholder="请输入内容"
        :show-counter="false"
        autosize
      />
      <x-button @click.native="submitfrom" type="button">发表</x-button>
    </div>
    <foo-ter/>
  </div>
</template>

<script>
import FooTer from '../../components/FooTer'
import axios from 'axios'
import { XTextarea, XInput, XButton } from 'vux'
export default {
  name: 'DynamicPublishing',
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton
  },
  data () {
    return {
      uid: localStorage.getItem('form_uid'),
      from_aynamic: {
        aynamicname: '',
        aynamic: '',
        from_uid: ''
      }
    }
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
    submitfrom: function () {
      this.from_aynamic.from_uid = localStorage.from_uid
      var obj = this.from_aynamic
      console.log(obj)
      axios.post('/api/aynamic', obj)
      .then(function (res) {
        console.log(res)
      })
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

