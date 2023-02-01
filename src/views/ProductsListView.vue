<script setup>
  import { computed, reactive, ReactiveEffect } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  let selectedProducts = computed( () => store.getters["products/getSelectedProducts"])
  let getSelectedProductsTotalPrice = computed( () => store.getters["products/getSelectedProductsTotalPrice"])
</script>

<template>
  <div>

    <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">

        <span class="d-flex justify-content-between mb-5">
          <h2>Productos a comprar</h2>
          <button v-if="selectedProducts.length > 0" type="button" class="btn btn-sm btn-outline-secondary ">Realizar la compra</button>
        </span>
      <p v-if="selectedProducts.length == 0">No existen productos para mostrar.</p>
      <div v-else class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Monto</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product of selectedProducts" :key="product.id">
              <td class="align-middle"><img :src="product.image" class="top-bar-logo img-circle elevation-2 list-size" :alt="product.name"></td>
              <td class="align-middle">{{product.title}}</td>
              <td class="align-middle">{{product.price}}</td>
              <td class="align-middle"><input class="form-control w-25" type="number" v-model="product.amount" @change="store.commit('products/updateProductAmount', product)"></td>
              <td class="align-middle">{{product.price * product.amount}}</td>
              <td class="align-middle"><button type="button" class="btn btn-sm btn-outline-secondary" @click="store.commit('products/removeProduct', product.id)">Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-if="selectedProducts.length > 0" class="mt-3">Importe total: ${{getSelectedProductsTotalPrice}}</p>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<style scoped>
.list-size{
  max-width: 30px;
}
</style>
