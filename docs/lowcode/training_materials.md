# 培训资料

[云叩公开培训视频](https://xbbpro.oss-cn-zhangjiakou.aliyuncs.com/helpcenter/2022/lowcode.mp4)

<template>
  <div>
    <Artplayer :src="art"  />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        art: {
          url: "https://cdn3.xbongbong.com/helpcenter/2022/lowcode.mp4",
        },
      };
    },
  };
</script>