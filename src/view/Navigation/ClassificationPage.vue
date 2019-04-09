<template>
  <div>
    <x-header class='header' :title='news' style='background-color:#5eadd6'/>
    <div>
      <div
        style="margin: 10px;overflow: hidden;"
        v-for="(item, index) in list2"
        :key= index
        @click="onClickItem(item)"
      >
          <masker
            style="border-radius: 2px;"
          >
            <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
            <div slot="content" class="m-title">
              {{item.name}}
              <br/>
              <span class="m-time">{{ item.title }}</span>
            </div>
          </masker>
      </div>
    </div>
  </div>
</template>
<script>
import { Masker } from 'vux'
export default {
  name: 'ClassificationPage',
  components: {
    Masker
  },
  data () {
    return {
      news: '跳蚤市场',
      list2: [
        {
          name: '电子产品',
          identification: 'electronics',
          title: '。。。。。',
          img: 'http://pic.51yuansu.com/pic3/cover/01/70/53/595f7b36a95cc_610.jpg',
          url: '/SecondHand'
        },
        {
          name: '二手书籍',
          identification: 'book',
          title: '。。。。。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554700049817&di=67b1d3e4445f60cad130ac5427cb0d2e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F63%2F35%2F28K58PIC3zQ_1024.jpg',
          url: '/SecondHand'
        }
      ]
    }
  },
  methods: {
    onClickItem (item) {
      console.log(item)
      this.$router.push({
        path: '/SecondHand',
        query: { key: item.identification, name: item.name }
      })
    }
  }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>

