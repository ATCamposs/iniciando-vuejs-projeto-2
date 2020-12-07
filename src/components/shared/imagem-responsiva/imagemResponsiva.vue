<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
