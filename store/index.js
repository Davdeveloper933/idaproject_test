export const state = () => ({
  products:[],
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
    state.products = JSON.parse(localStorage.getItem('products'))
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
  }
}
