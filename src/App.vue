<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import IconCart from './components/icons/IconCart.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

  const store = useStore()

  const route = useRoute()

  let selectedProducts = computed( () => store.getters["products/getQuantityAddedProducts"])

  let isOnHomeView = computed( () => route.name === 'Home')

  const products = computed( () => store.state.products.products)

  onMounted(() => {
    store.dispatch('products/loadProductsFromServer')
  })

</script>

<template>
<div>

  <main>
    <section class="py-5 text-center container-fluid header-image">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Tienda Online</h1>
        <p class="lead text-muted">Al alcance de un click.</p>
        <p>
          <RouterLink v-if="isOnHomeView && products.length > 0" :to="{name: 'ProductsSelected'}" class="btn btn-primary my-2">Ver productos seleccionados</RouterLink>
          <RouterLink v-if="!isOnHomeView" :to="{name: 'Home'}" class="btn btn-secondary my-2 color-white">Regresar a la pagina principal</RouterLink>
          <span v-if="!isOnHomeView" class="btn btn-secondary mx-1 my-2"><IconCart/><span class=" mx-1 badge bg-danger">{{selectedProducts}}</span></span>
          
        </p>
      </div>
    </div>
  </section>
  <RouterView />
  </main>
  </div>
</template>
<style scoped>
.header-image{
  background-image: url('/wallpaper.png');
}
</style>