<script setup>
import { useStore } from 'vuex'

defineProps({
  product: {
    type: Object
  }
})

const store = useStore()

</script>

<template>
  <div class="card shadow-sm">
        <img :src="product.image" class="top-bar-logo img-circle elevation-2 preview-size" :alt="product.name">

        <div class="card-body">
            <p class="card-text product-description-size">{{product.name}}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button v-if="product.added" type="button" class="btn btn-sm btn-outline-secondary bg-success color-white">Annadido</button>
                <button v-else type="button" class="btn btn-sm btn-outline-secondary bg-primary color-white" @click="store.commit('products/addToCart', product.id)">Annadir al carrito</button>
            </div>
            <small class="text-muted">{{product.price}}</small>
            </div>
        </div>
        </div>
</template>
<style scoped>
.preview-size{
  height: 225px;
}
.product-description-size{
  text-overflow: ellipsis;
  overflow: hidden;
  height: 25px;
}
</style>