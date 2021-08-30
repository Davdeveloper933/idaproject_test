export const state = () => ({
  products:[],
  productsClone:[],
  modal:false,
  preload:false
})

export const getters = {
  getProducts:(state)=> state.products
}

export const mutations = {
  addProduct(state,product) {
    state.products = JSON.parse(localStorage.getItem('products')) || state.products;
    state.products.push(product);
    localStorage.setItem('products',JSON.stringify(state.products))
  },
  deleteProduct(state,index) {
    state.products = JSON.parse(localStorage.getItem('products')) || state.products;
    state.products.splice(index,1);
    localStorage.setItem('products',JSON.stringify(state.products))
  },
  loadProducts(state) {
    state.products = JSON.parse(localStorage.getItem('products')) || state.products;
  },
  closeModal(state) {
    state.modal = false;
  },
  toggleModal(state) {
    state.modal = true
  },
  preloadAnimation(state) {
    state.preload = true
  },
  preloadAnimationStop(state) {
    state.preload = false
  },
  sortByMin(state) {
    state.productsClone = JSON.parse(JSON.stringify(state.products));
    state.productsClone.sort((a,b) => parseInt(a.price) - parseInt(b.price))
  },
  sortByMax(state) {
    state.productsClone = JSON.parse(JSON.stringify(state.products));
    state.productsClone.sort((a,b) => parseInt(b.price) - parseInt(a.price))
  },
  sortByTitle(state) {
    state.productsClone = JSON.parse(JSON.stringify(state.products));
    state.productsClone.sort(function (a,b) {
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    })
  }
}
