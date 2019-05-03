<template>
  <div class="home-page">
    <x-header
      style='background-color:#5eadd6;width: 100%;position: fixed;left: 0px;top: 0px;z-index: 100;'
    >
      <i class="iconfont iconquanzi"/>发现
      <router-link slot="right" to="/DynamicPublishing">动态</router-link>
      <div slot='overwrite-left'></div>
    </x-header>
    <div style="height:50px"></div>
    <div
      class="aynamic"
      v-for="(item, index) in list"
      :key="index"
      @click="onClickItem(item, index)"
    >
      <flexbox>
        <flexbox-item :span="2"><div class="flex-demo"><img width="80px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552457521393&di=db5044eeadb7b2645b5b12408fae19d5&imgtype=0&src=http%3A%2F%2Fpic.gerenjianli.com%2Fxiaohui2046%2Fb1051.jpg" alt="" srcset=""></div></flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{item.name}}</span><br/>
            <span>时间:{{item.time}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <li class="view">
        <pre>{{item.dynamic}}</pre>
      </li>
      <flexbox class="flexbox-item">
        <flexbox-item><div class="flex-demo"><i class="iconfont iconwodefenxiang"/>&nbsp;转发</div></flexbox-item>
        <flexbox-item><div class="flex-demo"><i class="iconfont iconwodexiaoxi"/>&nbsp;评论</div></flexbox-item>
        <flexbox-item><div class="flex-demo"><i class="iconfont iconiconfontzhizuobiaozhun44"/>&nbsp;点赞{{item.nume}}</div></flexbox-item>
      </flexbox>
    </div>

    <div style="height:100px;"></div>
    <foo-ter/>
  </div>
</template>

<script>
import axios from 'axios'
import FooTer from '../components/FooTer'
import { XTextarea, XInput, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
  name: 'Find',
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
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
    },
    onClickItem (item, index) {
      this.$router.push({
        path: '/Dynamic',
        query: { list: item }
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
.aynamic {
  background-color: white;
  margin: 10px;
}
.dyheader {
  padding: 5px 0px;
  display: flex;
  align-items:Center;
}
.dyheader > img {
  display: inline
}
.dyheader > span {
  display: block;
  font-size: 13px;
}
.dyfooter {
  text-align: right
}
.view {
  margin: 10px 20px
}
.flexbox-item {
  margin-top: 20px;
  font-size: 14px;
  color: #a09898
}
.flex {
  text-align: left;
  font-size: 14px;
}
.flex-demo {
  text-align: center;
  border-radius: 4px;
  background-clip: padding-box;
}

</style>

