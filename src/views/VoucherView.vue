<script setup>
  import { useStore } from 'vuex'
  import { onMounted } from 'vue'

  const store = useStore()

  onMounted(() => {
    store.commit('products/removeAllSelectedProduct')
  })
</script>
<template>
  <p class="mt-5 text-center font-size-2rem">
      La compra se ha realizado exitosamente!!! &#129395 &#129395 &#129395
  </p>
</template>
<style scoped>
.font-size-2rem{
    font-size: 2rem;
}
</style>
