<template>
  <div class="home-page">
    <x-header style='background-color:#5eadd6'>动态发布
      <router-link to="" slot="right" @click.native="submitfrom" type="submit">发表</router-link>
    </x-header>
    <div class="aynamic">
      <x-textarea
        :max="600"
        name="aynamic"
        v-model="from_aynamic.aynamic"
        placeholder="请输入内容"
        :show-counter="false"
      />
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
        aynamic: '',
        from_uid: '',
        time: '',
        username: ''
      }
    }
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
    submitfrom: function () {
      this.from_aynamic.from_uid = localStorage.from_uid
      this.from_aynamic.username = localStorage.username
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
.submitbut {
  margin-top: 200px;
}
</style>

