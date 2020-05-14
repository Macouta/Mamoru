<template>
    <div class="frame-rose">
      <img class="frame-rose-img" :src="img" />
      <img class="frame-rose-overlay" src="/img/ui_frame_rose_white.png" />
    </div>
</template>

<script>
export default {
  name: "frame-rose",
  data() {
    return {
    };
  },
  mounted: function() {
  },
  props: ["img"],
};
</script>

<style lang="stylus">
.frame-rose
  margin-top 2rem
  position relative
  height 250px
.frame-rose-overlay
  position absolute
  top 0
  left 0
  z-index 1
  height 100%
.frame-rose-img
  padding 0 2px 
  z-index 1
  height 99%
  border-radius 50%

</style>