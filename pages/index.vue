<template>
  <div>
    <div class="container">
      <div class="top-wrapper">
        <h2 class="add-product">Добавление товара</h2>
        <div class="filter-btn">По умолчанию</div>
      </div>
      <LeftSidebar/>
      <ProductsList/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .container {
    padding: 32px;
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
    font-size: 12px;
    color: #B4B4B4;
    width: 121px;
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
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
</style>
