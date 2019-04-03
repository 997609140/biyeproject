<template>
  <div>
    <x-header class='header' :title='news' style='background-color:#5eadd6'/>
      <div class="img">
        <img
          class="previewer-demo-img"
          v-for="(item, index) in list"
          :key="index"
          :src="item.src"
          width="100"
          @click="show(index)"
        >
        <div v-transfer-dom>
          <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>
      </div>
    </div>
</template>
<script>
import { Previewer, TransferDom } from 'vux'
import axios from 'axios'
export default {
  name: 'CommodityDetails',
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  data () {
    return {
      news: '跳蚤市场',
      listindex: 1,
      list1: [],
      list: [{
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        w: 800,
        h: 400
      },
      {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        w: 1200,
        h: 900
      },
      {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        w: 1200,
        h: 900
      },
      {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        w: 1200,
        h: 900
      }],
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
    onImgError (item, $event) {
      console.log(item, $event)
    },
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    },
    loading () {}
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
.img > swiper {
  width: 200px;
}
</style>

