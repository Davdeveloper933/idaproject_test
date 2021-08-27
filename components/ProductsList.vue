<template>
  <div class="products">
    <div class="products__wrapper">
        <div
          v-for="(product,index) in products"
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
            <h3 class="product__price">{{ product.price }} руб.</h3>
          </div>
        </div>
    </div>
    <div v-if="!products.length" class="products-is-empty">
      There is no products.Add some.
    </div>
  </div>
</template>

<script>
import DeleteButton from "~/components/deleteButton";
export default {
  name: "ProductsList",
  components: {DeleteButton},
  data() {
    return {
      hovered:false,
        test:[
          {
            id:1,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          },
          {
            id:2,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          },
          {
            id:3,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          },
          {
            id:4,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          },
          {
            id:5,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          },
          {
            id:6,
            title:'www',
            description:'eeee',
            link:'https://thechive.com/wp-content/uploads/2015/12/screen-shot-2015-12-27-at-8-40-45-pm.png?attachment_cache_bust=1222535&w=400',
            price:10000
          }
        ]
    }
  },
  computed:{
    products() {
      return this.$store.state.products;
    }
  },
  methods:{
    deleteProduct(index) {
      this.$store.commit('deleteProduct',index)
    }
  }
}
</script>

<style scoped lang="scss">
  .products {
    width: 74%;
    margin-top: 10px;
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
