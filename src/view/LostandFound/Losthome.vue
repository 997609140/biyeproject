<template>
  <div class="home-page">
    <x-header
      style='background-color:#5eadd6;width: 100%; position: fixed; left: 0px; top: 0px; z-index: 100;'
    >
      <i class="iconfont iconquanzi"/>失物招领
      <router-link slot="right" to="/addviews">添加</router-link>
    </x-header>
    <div style="height: 50px;"></div>
    <div
      class="aynamic"
      v-for="(item, index) in list"
      :key="index"
    >
      <flexbox>
        <flexbox-item :span="2"><div class="flex-demo"><img width="80px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552457521393&di=db5044eeadb7b2645b5b12408fae19d5&imgtype=0&src=http%3A%2F%2Fpic.gerenjianli.com%2Fxiaohui2046%2Fb1051.jpg" alt="" srcset=""></div></flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{item.username}}</span><br/>
            <span>{{item.Lostname}}</span>
          </div>
        </flexbox-item>
      </flexbox>

      <li class="view">
        <pre>{{item.Lostviews}}</pre>
      </li>
      <li style="font-size:13px;text-indent:2em">
        联系电话：{{item.tel}}
      </li>
      <li style="font-size:13px;text-indent:16em">{{converTime(new Date(item.time))}}</li>
    </div>

    <div style="height:100px;"></div>
    <foo-ter/>
  </div>
</template>

<script>
import axios from 'axios'
import FooTer from '../../components/FooTer'
import { XTextarea, XInput, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
  name: 'Losthome',
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
    converTime (UTCDateString) {
      if (!UTCDateString) {
        return '-'
      }
      function formatFunc (str) {    // 格式化显示
        return str > 9 ? str : '0' + str
      }
      var date2 = new Date(UTCDateString)     // 这步是关键
      var year = date2.getFullYear()
      var mon = formatFunc(date2.getMonth() + 1)
      var day = formatFunc(date2.getDate())
      var hour = date2.getHours()
      // var noon = hour >= 12 ? 'PM' : 'AM'
      hour = hour >= 12 ? hour : hour
      hour = formatFunc(hour)
      var min = formatFunc(date2.getMinutes())
      var dateStr = year + '-' + mon + '-' + day + ' ' + ' ' + hour + ':' + min
      return dateStr
    },
    loading () {
      axios.get('/api/getlostviews')
      .then(function (res) {
        this.list = res.data
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
.home-page {
  position: relative;
}
.aynamic {
  background-color: white;
  margin: 10px
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
  margin: 10px 20px;
  font-size: 13px;
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
pre {
  white-space:pre-wrap;
  text-indent: 2em
}

</style>

