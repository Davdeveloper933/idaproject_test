export const state = () => ({
  products:[],
  modal:false
})

export const mutations = {
  addProduct(state,product) {
    state.products.push(product)
  },
  deleteProduct(state,index) {
    state.products.splice(index,1)
  },
  closeModal(state) {
    state.modal = false;
  },
  toggleModal(state) {
    state.modal = !state.modal;
  }
}
