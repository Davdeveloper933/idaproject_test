<template>
  <div class="products">
    <div class="products__wrapper">
        <div
          v-for="(product,index) in getProducts"
          :key="index"
          class="product"
          >
          <DeleteButton @click.native="deleteProduct(index)"></DeleteButton>
          <div class="product__img">
            <img :src="product.link" alt="" >
          </div>
          <div class="product__info">
            <h2 class="product__title">{{ product.title }}</h2>
            <p class="product__description">
              {{ product.desc }}
            </p>
            <h3 class="product__price">{{ product.price | price}} руб.</h3>
          </div>
        </div>
    </div>
    <div v-if="getProducts.length < 1" class="products-is-empty">
      There is no products.Add some.
    </div>
  </div>
</template>

<script>
import DeleteButton from "~/components/deleteButton";
export default {
  name: "ProductsList",
  components: {DeleteButton},
  filters:{
    price(price) {
      let firstNums;
      let midNums;
      let lastNums;
      if(price >= 10000 && price < 100000) {
        price = price.toString();
        firstNums = price.slice(0,2);
        lastNums = price.slice(2);
        return firstNums+" "+lastNums;
      }else if(price >= 100000 && price < 1000000) {
        price = price.toString();
        firstNums = price.slice(0,3);
        lastNums = price.slice(3);
        return firstNums+" "+lastNums;
      }else if(price >= 1000000 && price < 10000000) {
        price = price.toString();
        firstNums = price.slice(0,1);
        midNums = price.slice(1,4);
        lastNums = price.slice(4);
        return firstNums+" "+midNums+" "+lastNums;
      }else if(price >= 10000000) {
        price = price.toString();
        firstNums = price.slice(0,2);
        midNums = price.slice(2,5);
        lastNums = price.slice(5);
        return firstNums+" "+midNums+" "+lastNums;
      }else {
        return price;
      }
    }
  },
  data() {
    return {
      products:[]
    }
  },
  computed:{
    getProducts() {
      return this.$store.state.products;
    }
  },
  created() {
    // this.getProducts = JSON.parse(localStorage.getItem('products'));
    this.$store.commit('loadProducts')
  },
  methods:{
    deleteProduct(index) {
      setTimeout(()=>{
        this.$store.commit('deleteProduct',index);
        this.$store.commit("preloadAnimationStop")
      },700)
      this.$store.commit("preloadAnimation")
    }
  }
}
</script>

<style scoped lang="scss">
  .products {
    width: 74%;
    margin-top: 10px;
    position: relative;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .product {
    width: 30%;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-bottom: 16px;
    position: relative;
    margin-left: 25px;
    cursor: pointer;
    background: white;
    &:hover .delete-btn {
      display: flex;
    }
    &__info {
      background: #FFFEFB;
      padding: 24px 16px;
      border-radius: 4px;
    }
    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 16px;
    }
    &__description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
      word-break: break-all;
    }
    &__price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
    &__img {
      img {
        width: 100%;
        max-width: 100%;
        height: 200px;
        object-fit: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  }
  .products-is-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 1280px) {
    .product {
      width: 28%;
    }
    .container {
      max-width: 1200px;
    }
  }

  @media (max-width: 992px) {
    .product {
      width: 30%;
      margin-left: 20px;
      &__title {
        font-size: 17px;
      }
      &__price {
        font-size: 20px;
      }
    }
    .products {
      width: 100%;
    }
  }
  @media (max-width: 664px) {
    .product {
      width: 46%;
    }
  }
  @media (max-width: 576px) {
    .product {
      width: 46%;
      margin-left: 15px;
    }
  }
  @media (max-width: 450px) {
    .product {
      width: 80%;
      margin: 0 auto 20px auto;
    }
  }
  @media (max-width: 375px) {
    .product {
      width: 100%;
    }
  }
</style>
