export const state = () => ({
  products:[],
  modal:false
})

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
    state.products = JSON.parse(localStorage.getItem('products'));
  },
  closeModal(state) {
    state.modal = false;
  },
  toggleModal(state) {
    state.modal = !state.modal;
  }
}
