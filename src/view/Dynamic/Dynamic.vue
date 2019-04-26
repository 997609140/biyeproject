<template>
  <div class="home-page">
    <x-header style='background-color:#5eadd6'>动态发布
    </x-header>
    <div class="dynamic">
      <flexbox>
        <flexbox-item :span="2"><div class="flex-demo"><img width="80px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552457521393&di=db5044eeadb7b2645b5b12408fae19d5&imgtype=0&src=http%3A%2F%2Fpic.gerenjianli.com%2Fxiaohui2046%2Fb1051.jpg" alt="" srcset=""></div></flexbox-item>
        <flexbox-item>
          <div class="flex">
            <span>{{title.name}}</span><br/>
            <span>时间:{{title.time}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <li class="view">
        <pre>{{title.dynamic}}</pre>
      </li>
      <flexbox class="flexbox-item">
        <flexbox-item><div class="flex-demo">转发</div></flexbox-item>
        <flexbox-item><div class="flex-demo">评论</div></flexbox-item>
        <flexbox-item><div class="flex-demo">点赞</div></flexbox-item>
      </flexbox>
    </div>
    <div class="aynamic">
      <x-textarea
        :max="600"
        name="aynamic"
        v-model="from_aynamic.aynamic"
        placeholder="请输入内容"
        :show-counter="false"
      />
    </div>
  </div>
</template>

<script>
import FooTer from '../../components/FooTer'
// import axios from 'axios'
import { XTextarea, XInput, XButton } from 'vux'
export default {
  name: 'Dynamic',
  components: {
    FooTer,
    XTextarea,
    XInput,
    XButton
  },
  data () {
    return {
      title: this.$route.query.list,
      from_aynamic: {
        aynamic: '',
        from_uid: '',
        time: '',
        username: ''
      },
      uid: localStorage.getItem('form_uid')
    }
  },
  created: function () {
    console.log(this.title)
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
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
  margin: 10px
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
  position: fixed;
  bottom: 0px;
  margin: 10px;
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

