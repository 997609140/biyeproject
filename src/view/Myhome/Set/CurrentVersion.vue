<template>
  <div class="body">
    <x-header style='background-color:#5eadd6'/>
    <div class="home-page">
      <div class="name">
        校e家
      </div>
    </div>
    校e家 V1.0.0 <br/>
    <span style="font-size:13px;color:gray">已是最新版本</span>
  </div>
</template>
<script>
export default {
  name: 'CurrentVersion'
}
</script>

<style scoped>
.body {
  text-align: center
}
.home-page {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.name {
  color: white;
  font-size: 23px;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #6ebcd4ab;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
}
</style>
