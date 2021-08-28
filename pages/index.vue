<template>
  <div>
    <div class="container">
      <transition name="fade">
        <ModalFilter v-if="open"></ModalFilter>
      </transition>
      <transition name="fade">
        <Preloader v-if="preloader"></Preloader>
      </transition>
      <div class="top-wrapper">
        <h2 class="add-product">Добавление товара</h2>
        <div class="filter-btn">По умолчанию</div>
      </div>
      <div class="mobile-panel">
        <FilterButton class="modal-btn" @click.native="modal" ></FilterButton>
      </div>
      <div class="main-wrapper">
        <LeftSidebar/>
        <ProductsList/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "~/components/FilterButton";
import ModalFilter from "~/components/ModalFilter";
import Preloader from "~/components/Preloader";
export default {
  components: {ModalFilter, FilterButton,Preloader},
  computed:{
    open() {
      return this.$store.state.modal
    },
    preloader() {
      return this.$store.state.preload
    }
  },
  methods:{
    modal() {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding: 32px;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
  .add-product {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }
  .filter-btn {
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: normal;
    font-size: 14px;
    color: #B4B4B4;
    max-width: 150px;
    text-align: center;
    padding: 10px 16px;
    cursor: pointer;
    &::after {
      content: '^';
      transform: rotate(180deg);
      display: inline-block;
      margin-left: 5px;
    }
  }
  .modal-btn {
    display: inline-block;
  }
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .main-wrapper {
    display: flex;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .mobile-panel {
    display: none;
  }

  @media (max-width: 992px) {
    .add-product {
      font-size: 25px;
    }
    .mobile-panel {
      display: block;
      margin-bottom: 20px;
    }
    .sidebar {
      display: none;
    }
  }
  @media (max-width: 450px) {
    .top-wrapper {
      justify-content: flex-start;
      align-items: normal;
      margin-bottom: 16px;
      flex-direction: column;
    }
    .add-product {
      margin-bottom: 10px;
    }
  }
</style>
