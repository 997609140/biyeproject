<template>
  <div style="background-color: #ddf0f3">
    <x-header class='header' :title='item.commodity' style='background-color:#5eadd6'/>
    <div class="views">
      价格：<span>{{item.price}}</span><br/>
      卖家：<span>{{item.name}}</span><br/>
      详情：<span>{{item.describe}}</span>
    </div>
    <div class="img">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item"
        width="80%px"
      >
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
      listindex: 1,
      item: JSON.parse(this.$route.params.list),
      list1: [
        {
          w: 600,
          h: 400
        }
      ],
      list: []
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

