<template>
  <div class="home-page">
    <x-header style='background-color:#5eadd6;width: 100%;position: fixed;left: 0px;top: 0px;z-index: 100;'>动态发布
    </x-header>
    <div style="height:50px;"></div>
    <div class="dynamic">
      <flexbox>
        <flexbox-item :span="2"><div class="flex-demo"><img width="80px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552457521393&di=db5044eeadb7b2645b5b12408fae19d5&imgtype=0&src=http%3A%2F%2Fpic.gerenjianli.com%2Fxiaohui2046%2Fb1051.jpg" alt="" srcset=""></div></flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{title.name}}</span><br/>
            <span>{{converTime(new Date(title.time))}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <li class="view">
        <pre>{{title.dynamic}}</pre>
      </li>
      <flexbox class="flexbox-item">
        <flexbox-item><div class="flex-demo">转发</div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="onShow()">评论</div></flexbox-item>
        <flexbox-item><div class="flex-demo">点赞</div></flexbox-item>
      </flexbox>
    </div>

    <div v-transfer-dom>
      <confirm
        v-model="show"
        title="评论"
        theme="android"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide"
      >
      <x-textarea
        :max="600"
        name="aynamic"
        v-model="findlist.content"
        placeholder="请输入内容"
        :show-counter="false"
      />
      </confirm>

      <confirm
        v-model="showf"
        title="回复"
        theme="android"
        @on-cancel="onCancel"
        @on-confirm="onConfirmf"
        @on-hide="onHide"
      >
      <x-textarea
        :max="600"
        name="aynamic"
        v-model="find_comment.content"
        placeholder="请输入内容"
        :show-counter="false"
      />
      </confirm>
    </div>

    <div
      class="find"
      v-for="(item, index) in list"
      :key="index"
    >
      <flexbox>
        <flexbox-item :span="2">
          <div class="flex-demo">
            <img width="60px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552457521393&di=db5044eeadb7b2645b5b12408fae19d5&imgtype=0&src=http%3A%2F%2Fpic.gerenjianli.com%2Fxiaohui2046%2Fb1051.jpg">
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{item.topic_type}}</span><br/>
            <span>{{converTime(new Date(item.time))}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <li class="view">
        <pre>{{item.content}}</pre>
        <flexbox class="flexbox-item1">
          <flexbox-item><div class="flex-demo" @click="onShowf(index)"><i class="iconfont iconwodexiaoxi"/>&nbsp;回复</div></flexbox-item>
          <flexbox-item><div class="flex-demo"></div></flexbox-item>
          <flexbox-item><div class="flex-demo" @click="getFindViews(index)">详情</div></flexbox-item>
        </flexbox>
      </li>
      <div
        class="findviews"
      >

      </div>
    </div>
    <div style="height:100px;"></div>
  </div>
</template>

<script>
import FooTer from '../../components/FooTer'
import axios from 'axios'
import { XTextarea, XInput, XButton, Confirm, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'Dynamic',
  directives: {
    TransferDom
  },
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton,
    Confirm
  },
  data () {
    return {
      title: this.$route.query.list,
      list: [],
      findviewslist: [],
      findlist: {
        content: '',
        from_uid: '',
        topic_id: '',
        topic_type: '',
        time: ''
      },
      find_comment: {
        content: '', // 回复内容
        from_uid: '', // 回复用户id
        to_id: '', // 目标用户id
        reply_id: '', // 回复目标id
        reply_type: '', // 回复类型
        comment_id: '' // 评论id
      },
      uid: localStorage.getItem('form_uid'),
      show: false,
      showf: false
    }
  },
  created: function () {
    this.onload()
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
    onload () {
      axios.get('/api/findaynamic', {
        params: {
          from_uid: this.$route.query.list.id
        }
      })
      .then(function (res) {
        this.list = res.data
      }.bind(this))
    },
    getFindViews (index) {
      console.log(this.list[index])
      var arr = this.list[index]
      axios.get('/api/findviews', {
        params: {
          toid: arr.id
        }
      })
      .then(function (res) {
        this.findviewslist = res.data
      }.bind(this))
    },
    onEvent (event) {
      console.log('on', event)
    },
    onCancel () {
      console.log('on cancel')
    },

    // 评价
    onConfirm () {
      var _this = this
      var d = new Date()
      var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds
      this.findlist.time = datetime
      this.findlist.from_uid = this.$route.query.list.id
      this.findlist.topic_id = localStorage.from_uid
      this.findlist.topic_type = localStorage.username
      var obj = this.findlist
      // console.log(obj)
      axios.post('/api/find', obj)
      .then(function (res) {
        _this.onload()
      })
    },

    // 回复
    onConfirmf () {
      var _this = this
      this.find_comment.from_uid = localStorage.from_uid
      this.find_comment.to_id = this.find_comment.to_id
      this.find_comment.reply_id = 1
      this.find_comment.reply_type = '回复'
      this.find_comment.comment_id = this.$route.query.list.id
      var obj = this.find_comment
      console.log(obj)
      axios.post('/api/findcomment', obj)
      .then(function (res) {
        _this.onload()
      })
    },
    onHide () {},
    onShow () {
      this.show = true
    },
    onShowf (index) {
      console.log(1)
      console.log(this.list[index])
      var arr = this.list[index]
      this.find_comment.to_id = arr.id
      console.log(this.find_comment.to_id)
      this.showf = true
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
  height: 100vh;
  position: relative;
}
.aynamic {
  background-color: white;
}
.dyheader {
  padding: 5px 0px;
  display: flex;
  align-items:Center;
}
.dyheader > img {
  border-radius: 50%
}
.dyheader > span {
  display: block;
  font-size: 13px;
}
.dyfooter {
  text-align: right
}
.view {
  background-color: #edf3f340;
  margin: 10px 20px
}
.flexbox-item {
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  font-size: 14px;
  color: #a09898
}
.flex {
  text-align: left;
  font-size: 14px;
}
.flex-demo {
  text-align: center;
  border-radius: 50%;
}


.find {
  width: 90%;
  margin-left: 8%
}
</style>

