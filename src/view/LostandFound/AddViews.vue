<template>
  <div class="home-page">
    <x-header style='background-color:#5eadd6'>丢失及拾到发布
      <router-link to="" slot="right" @click.native="submitfrom" type="submit">发表</router-link>
    </x-header>
    <div class="aynamic">
      <x-input
          class="login-input"
          title="物品名称"
          v-model="lostviews.Lostname"
          placeholder="请输入物品名称">
          <div
            slot="label"
            style="margin-right:10px;"
          >
          物品名称
          </div>
        </x-input>
      <x-textarea
        title="物品描述"
        :max="600"
        required = true
        name="aynamic"
        v-model="lostviews.Lostviews"
        placeholder="请输入内容"
        :show-counter="false"
      />
      <x-input
          class="login-input"
          :max="11"
          title="物品名称"
          name="mobile"
          v-model="lostviews.tel"
          placeholder="请输入手机号码"
          keyboard="number"
          is-type="china-mobile">
          <div
            slot="label"
            style="margin-right:10px;"
          >
          联系电话
          </div>
        </x-input>
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
import { XTextarea, Toast, XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'AddViews',
  directives: {
    TransferDom
  },
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton,
    Alert,
    Toast
  },
  data () {
    return {
      position: 'middle',
      show: false,
      showPositionValue: false,
      title: '',
      uid: localStorage.getItem('form_uid'),
      lostviews: {
        Lostname: '',
        foundname: '',
        Lostviews: '',
        tel: '',
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
      this.lostviews.username = localStorage.username
      var obj = this.lostviews
      if (obj.Lostname === '' || obj.Lostviews === '' || obj.tel === '') {
        _this.showPosition('middle', '请填入详细完整信息')
      } else {
        axios.post('/api/addviews', obj)
        .then(function (res) {
          _this.showPosition('middle', '信息发布成功')
          _this.$router.push({ path: '/Losthome' })
        })
      }
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

