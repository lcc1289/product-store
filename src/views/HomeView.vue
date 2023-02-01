<script setup>
  import Product from '../components/Product.vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const products = computed( () => store.state.products.products)

</script>

<template>
  <div>
    <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="product of products" :key="product.id" class="col">
          <Product :product="product"/>
        </div>
        <div v-if="products.length == 0" class="col-12">
          <div class="d-flex justify-content-center">
            <p class="text-size-loading text-center mx-3">En estos momentos se estan cargando los productos, por favor espere</p>
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.text-size-loading{
  font-size: 1.25rem;
}
</style>
