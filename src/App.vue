<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img src="{{ foto.url }}" alt="{{ foto.titulo }}" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Banco de imagens de gatinhos',
      foto: {
        url:
          'https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345_960_720.jpg',
        titulo: 'Gato olhando para camera',
      },
    }
  },
}
</script>

<style></style>
