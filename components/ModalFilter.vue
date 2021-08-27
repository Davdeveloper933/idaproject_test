<template>
  <div  class="modal-overlay">
  <div  class="mobile-sidebar">
    <LeftSidebar v-click-outside="close" class="modal"></LeftSidebar>
  </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import LeftSidebar from "~/components/LeftSidebar";

export default {
  name: "ModalFilter",
  components: {LeftSidebar},
  directives: {
    ClickOutside
  },
  methods:{
    close() {
      this.$store.commit('closeModal')
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-sidebar {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    z-index: 2000;
  }
  .modal-overlay {
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 1999;
  }

  @media (max-width: 767px) {
      .sidebar.modal {
        width: 50%;
      }
  }
  @media (max-width: 600px) {
    .sidebar.modal {
      width: 69%;
    }
  }
  @media (max-width: 450px) {
    .sidebar.modal {
      width: 90%;
    }
  }
  @media (max-width: 376px) {
    .sidebar.modal {
      width: 100%;
    }
    .mobile-sidebar {
      top: 0;
      transform: translate(-50%, 0);
    }
  }
</style>
