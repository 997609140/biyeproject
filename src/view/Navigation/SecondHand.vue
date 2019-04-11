<template>
  <div>
    <x-header class='header' :title='this.$route.query.name' style='background-color:#5eadd6'/>
    <div class="secondhand">
      <card :header="{title: '商品详情' }">
        <!-- :footer="{title: '查看更多',link:'/component/panel'}" -->
        <div
          slot="content"
          class="card-padding"
          v-for="(item, index) in list"
          :key="index"
          @click="onClickItem(item)"
        >
          <div
            class="img"
          >
            <img :src="item.img.split(',')[0]">
            <div class="secondhandviews">
              商品名称: <span> {{ item.commodity }}</span><br/>

              联系人: <span> {{ item.name }}</span><br/>
              价格: <span> {{ item.price }}</span>元
            </div><br/>
            <span>{{ item.describe }}</span>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { Masker, Card, Swiper, SwiperItem, Previewer, TransferDom } from 'vux'
import axios from 'axios'
export default {
  name: 'SecondHand',
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    SwiperItem,
    Masker,
    Card,
    Previewer
  },
  data () {
    return {
      news: '跳蚤市场',
      listindex: 1,
      list1: [],
      list: [],
      imgsrc: []
    }
  },
  created: function () {
    this.loading()
  },
  methods: {
    onClickItem (item) {
      console.log(item)
      this.$router.push({
        name: 'CommodityDetails',
        params: { list: JSON.stringify(item) }
      })
    },
    show (index) {
      this.$refs.previewer.show(index)
    },
    loading () {
      var _this = this
      axios.get('/api/secondhandlist', {
        params: {
          key: _this.$route.query.key
        }
      })
      .then(function (res) {
        this.list = res.data
        console.log(this.list)
      }.bind(this))
    }
  }
}
</script>

<style scoped>
.navigion {
  height: 60px;
  background-color: antiquewhite
}
.card-padding {
  padding: 15px;
  margin: 0 10px;
  border-bottom: 1px solid gainsboro;
}
.img > img{
  width: 100px;
  display: inline-block;
}
.secondhandviews {
  display: inline-block;
}
.secondhandviews > span {
  color: grey;
  font-size: 14px;
}
</style>

