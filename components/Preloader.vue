<template>
  <div class="preloader">
    <img src="~@/assets/img/spinner.gif" alt="">
  </div>
</template>

<script>
export default {
  name: "Preloader"
}
</script>

<style scoped lang="scss">
  .preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.1);
    & img {
      width: 50px;
    }
  }
</style>
