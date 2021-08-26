<template>
  <div class="sidebar">
      <div class="sidebar__wrapper">
        <label class="form__label">
          <p class="form__label__title">Наименование товара</p>
          <input type="text" placeholder="Введите наименование товара">
        </label>
        <label class="form__label">
          <p class="form__label__title">Описание товара</p>
          <textarea placeholder="Введите описание товара"></textarea>
        </label>
        <label class="form__label">
          <p class="form__label__title">Ссылка на изображение товара</p>
          <input type="text" placeholder="Введите ссылку">
        </label>
        <label class="form__label">
          <p class="form__label__title">Цена товара</p>
          <input type="text" placeholder="Введите цену">
        </label>
        <button class="submit-btn">Добавить товар</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "LeftSidebar"
}
</script>

<style scoped lang="scss">
  .sidebar {
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width: 332px;
    &__wrapper {
      padding: 24px;
    }
  }
</style>
