<template>
  <div class="sidebar">
      <div class="sidebar__wrapper">
        <div class="modal-close" @click="close">x</div>
        <label class="form__label">
          <p class="form__label__title required">Наименование товара</p>
          <input
            v-model="title"
            :class="{ 'error':error && !title}"
            class="form__input"
            type="text"
            placeholder="Введите наименование товара"
            @blur="onBlur"
          >
          <p v-if="error && !title" class="error-text" >Поле является обязательным</p>
        </label>
        <label class="form__label">
          <p class="form__label__title">Описание товара</p>
          <textarea
            v-model="description"
            class="form__input desc"
            placeholder="Введите описание товара"
          ></textarea>
        </label>
        <label class="form__label">
          <p class="form__label__title required">Ссылка на изображение товара</p>
          <input
            v-model="link"
            :class="{ 'error':error && !link}"
            class="form__input"
            type="text"
            placeholder="Введите ссылку"
            @blur="onBlur"
          >
          <p v-if="error && !link" class="error-text" >Поле является обязательным</p>
        </label>
        <label class="form__label">
          <p class="form__label__title required">Цена товара</p>
          <input
            v-model="price"
            :class="{ 'error':error && !price}"
            class="form__input"
            type="number"
            placeholder="Введите цену"
            @blur="onBlur"
          >
          <p v-if="error && !price" class="error-text" >Поле является обязательным</p>
        </label>
        <button class="submit-btn"
                :class="{'disabled':!validate}"
                :disabled="!validate"
                @click="addProduct"
        >Добавить товар</button>
      </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
  name: "LeftSidebar",
  directives: {
    ClickOutside
  },
  data() {
    return {
      title:null,
      description:null,
      link:null,
      price:null,
      error:false
    }
  },
  computed:{
    validate() {
      if(this.title && this.link && this.price) {
        return true;
      }else {
        return false;
      }
    }
  },
  methods:{
    onBlur() {
      if(!this.title || !this.link || !this.price) {
        this.error = true
      }else {
        this.error = false
      }
    },
      submit() {
        alert('clicked')
      },
    addProduct() {
        const product = {
          title:this.title,
          desc:this.description,
          link:this.link,
          price:this.price
        }
        setTimeout(()=>{
          this.$store.commit('addProduct', product)
          this.$store.commit("preloadAnimationStop")
        },700)
      this.$store.commit("preloadAnimation")
      this.$store.commit('closeModal')
    },
    close() {
      this.$store.commit('closeModal')
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    //background: #FFFEFB;
    //box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width: 26%;
    position: relative;
    margin-right: 16px;
    &__wrapper {
      height: fit-content;
      padding: 24px;
      display: flex;
      flex-direction: column;
      position: fixed;
      width: inherit;
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    }
    &.modal {
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      height: fit-content;
      margin-right: 0;
      & .sidebar__wrapper {
        background: unset;
        box-shadow: unset;
        position: relative;
        width: unset;
      }
    }
  }
  .form {
    &__input {
      background: #FFFEFB;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      padding: 16px;
      resize: none;
      &.desc {
        height: 108px;
      }
      &::placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
        line-height: 15px;
        color: #B4B4B4;
      }
      &.error {
        border: 1px solid #FF8484;
      }
    }
    &__label {
      display: flex;
      flex-direction: column;
      &:not(:first-child) {
        margin-top: 20px;
      }
      &__title {
        font-size: 15px;
        letter-spacing: -0.02em;
        color: #49485E;
        margin-bottom: 6px;
        position: relative;
        width: fit-content;
        &.required {
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            background: #FF8484;
            border-radius: 50%;
            right: -10px;
            top: 0;
          }
        }
      }
    }
  }
  .submit-btn {
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: -0.02em;
    border: none;
    padding: 16px;
    background: #7BAE73;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #FFF;
    cursor: pointer;
    margin-top: 30px;
    &.disabled {
      background: #EEE;
      color: #B4B4B4;
    }
  }
  .error-text {
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
    font-size: 12px;
    margin-top: 10px;
  }

  .modal-close {
    display: none;
    right: 27px;
    position: absolute;
    font-size: 27px;
    top: 0;
  }

  @media (max-width: 992px) {
    .sidebar {
      width: 40%;
    }
    .submit-btn {
      font-size: 15px;
    }
    .modal-close {
      display: block;
    }
  }
</style>
