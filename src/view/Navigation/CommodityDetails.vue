<template>
  <div>
    <x-header class='header' :title='this.$route.query.list.commodity' style='background-color:#5eadd6'/>
      <div class="img">
        <img
          v-for="(item, index) in list"
          :key="index"
          :src="item"
          width="80%px"
        >
      </div>
      <div class="views">
        价格：<span>{{this.$route.query.list.price}}</span><br/>
        卖家：<span>{{this.$route.query.list.name}}</span><br/>
        详情：<span>{{this.$route.query.list.describe}}</span>
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
      this.list = this.$route.query.list.img.split(',')
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

