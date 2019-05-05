<template>
  <div>
    <x-header class='header' :title='item.commodity' style='background-color:#5eadd6'/>

    <div class="swiper">
      <swiper
        @on-index-change="demo01_onIndexChange"
        :auto = true
        :loop = true
      >
        <swiper-item
          class="swiper-demo-img"
          v-for="(item, index) in list"
          :key="index">
          <img :src="item" width="100%px">
        </swiper-item>
      </swiper>
    </div>

    <div class="views">
      <span style="color:red;font-size:30px">￥{{item.price}}</span><br/>
      卖家：<span style="color:gray;font-size:14px">{{item.name}}</span><br/>
      电话：<span style="color:gray;font-size:14px">{{item.tel}}</span><br/>
      <span style="color: gray;font-size: 14px;text-indent: 2em;display: inline-block;margin-top: 15px;">{{item.describe}}</span>
    </div>
  </div>
</template>
<script>
import { Previewer, TransferDom, Swiper, SwiperItem } from 'vux'
import axios from 'axios'
export default {
  name: 'CommodityDetails',
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Swiper,
    SwiperItem
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
    logIndexChange (arg) {},
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
}
.swiper {
  margin: 10px
}
.card-padding {
  padding: 15px;
}
.img {
  margin-top: 10px;
  text-align: center
}
.views {
  margin: 20px
}
</style>

