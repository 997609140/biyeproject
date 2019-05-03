<template>
  <div class="home-page">
    <x-header
      style='background-color:#5eadd6'
    >
      <i class="iconfont iconquanzi"/>我的动态
      <router-link slot="right" to="/DynamicPublishing">动态</router-link>
      <div slot='overwrite-left'></div>
    </x-header>

    <div
      class="aynamic"
      v-for="(item, index) in list"
      :key="index"
      @click="onClickItem(item, index)"
    >
      <flexbox>
        <flexbox-item :span="2">
          <div class="flex-demo">
            <img width="60px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556536990334&di=a69e38af48b68e7cdde00a0c75e16898&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1402%2F26%2F4350837_11_thumb.jpg" alt="" srcset="">
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{item.name}}</span><br/>
            <span>时间:{{item.time}}</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="delet">
            <span>删除</span>
          </div>
        </flexbox-item>
      </flexbox>
      <li class="view">
        <pre>{{item.dynamic}}</pre>
      </li>
      <flexbox class="flexbox-item">
        <flexbox-item><div class="flex-demo">转发</div></flexbox-item>
        <flexbox-item><div class="flex-demo">评论</div></flexbox-item>
        <flexbox-item><div class="flex-demo">点赞</div></flexbox-item>
      </flexbox>
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
  name: 'MyDynamic',
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
      axios.get('/api/fand', {
        params: {
          key: 'mydynamic',
          user_id: localStorage.from_uid
        }
      })
      .then(function (res) {
        this.list = res.data
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
  background-color: #edf3f340;
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
.delet {
  text-align: right;
  margin-bottom: 30px;
  margin-right: 10px
}

</style>

