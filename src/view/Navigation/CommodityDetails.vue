<template>
  <div style="background-color: #ddf0f3">
    <x-header class='header' :title='item.commodity' style='background-color:#5eadd6'/>

    <div>
      <swiper
        :list="list"
        v-model="demo01_index"
        @on-index-change="demo01_onIndexChange"
        :auto = true
        :loop = true></swiper>
      <div v-transfer-dom>
        <previewer
          :list="list"
          ref="previewer"
          :options="options"
          @on-index-change="logIndexChange"></previewer>
      </div>
    </div>

    <div class="views">
      价格：<span>{{item.price}}</span><br/>
      卖家：<span>{{item.name}}</span><br/>
      详情：<span>{{item.describe}}</span>
    </div>
    <!-- <div class="img">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item"
        width="80%px"
      >
    </div> -->
  </div>
</template>
<script>
import { Previewer, TransferDom, Swiper } from 'vux'
import axios from 'axios'
export default {
  name: 'CommodityDetails',
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Swiper
  },
  data () {
    return {
      listindex: 1,
      demo01_index: 0,
      item: JSON.parse(this.$route.params.list),
      list1: [
        {
          w: 600,
          h: 400
        }
      ],
      list: [],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  created: function () {
    this.loading()
  },
  methods: {
    onClickItem (item) {
      console.log(item)
      axios.get('/api/list')
      .then(function (res) {
        console.log(res.data[item.h_id - 1])
      })
      this.$router.push({
        path: '/Information',
        query: { list: item }
      })
    },

    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    },
    loading () {
      this.list = this.item.img.split(',')
      console.log(this.list)
    }
  }
}
</script>

<style scoped>
.navigion {
  height: 60px;
  background-color: antiquewhite;
}
.card-padding {
  padding: 15px;
}
.img {
  margin-top: 10px;
  text-align: center
}
img {
  margin:5px 10px ;
}
.views {
  margin: 20px
}
</style>

