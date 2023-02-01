
import axios from 'axios'
export default ({
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    addToCart (state, idProduct) {
      const product = state.products.find(item => item.id === idProduct)
      if (product) {
        product.added = true
      }
    },
    removeProduct (state, idProduct) {
      const product = state.products.find(item => item.id === idProduct)
      if (product) {
        product.added = false
      }
    },
    updateProductAmount (state, productData) {
      const product = state.products.find(item => item.id === productData.id)
      if (product) {
        product.amount = productData.amount
      }
    },
    updateProducts (state, products) {
      state.products.splice(0, state.products.length)
      products.forEach(product => {
        state.products.push(product)
      })
    }
  },
  actions: {
    loadProductsFromServer ({ state, getters, commit }) {
      return axios.get('products')
        .then(function (response) {
          const productsMapped = getters.mapProductsFromServerToLocal(response.data)
          commit('updateProducts', productsMapped)
          return { status: true, message: '' }
        })
        .catch(function (error) {
          return { status: false, message: error.response.data }
        })
    }
  },
  getters: {
    getQuantityAddedProducts (state) {
      if(state.products.length === 0) {
        return 0
      }
      return state.products.filter(item => item.added).length
    },
    getSelectedProducts (state) {
      return state.products.filter(item => item.added)
    },
    getSelectedProductsTotalPrice (state) {
      const initialValue = 0
      let totalPrice = 0
      state.products.forEach(product => {
        if (product.added) {
          totalPrice += product.price * product.amount
        }
      })
      return totalPrice
    },
    mapProductsFromServerToLocal: (state, getters) => (products) => {
      const mappedProducts = []
      products.forEach(product => {
        const mappedProduct = getters.mapSingleProductFromServerToLocal(product)
        mappedProducts.push(mappedProduct)
      })
      return mappedProducts
    },
    mapSingleProductFromServerToLocal: (state) => (product) => {
      const localProduct = {
        id: product.id,
        title: product.title,
        added: false,
        description: product.description,
        rating:product.rating,
        image: product.image,
        price: product.price,
        amount: 1
      }
      return localProduct
    }
  }
})
