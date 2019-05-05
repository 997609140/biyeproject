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
    <div v-transfer-dom>
      <toast
        v-model="showPositionValue"
        type="text"
        :time="1000"
        is-show-mask
        :text="title"
        :position="position">
        {{ }}
      </toast>
    </div>
    <foo-ter/>
  </div>
</template>

<script>
import FooTer from '../../components/FooTer'
import axios from 'axios'
import { XTextarea, XInput, XButton, Toast, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'DynamicPublishing',
  directives: {
    TransferDom
  },
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton,
    Toast
  },
  data () {
    return {
      // uid: localStorage.getItem('form_uid'),
      position: 'middle',
      showPositionValue: false,
      title: '',
      from_aynamic: {
        aynamic: '',
        from_uid: '',
        time: '',
        username: ''
      }
    }
  },
  methods: {
    showPosition (position, title) {
      this.position = position
      this.title = title
      this.showPositionValue = true
    },
    submitfrom: function () {
      var _this = this
      var d = new Date()
      var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds
      this.from_aynamic.time = datetime
      this.from_aynamic.from_uid = localStorage.from_uid
      this.from_aynamic.username = localStorage.username
      var obj = this.from_aynamic
      axios.post('/api/aynamic', obj)
      .then(function (res) {
        _this.showPosition('middle', '动态发布成功')
        _this.$router.push('/Find')
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

