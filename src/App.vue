<template>
  <div>
    <!-- posso usar também <h1>{{ titulo }}</h1>-->
    <h1 v-text="titulo"></h1>
    <!-- no lugar de usar v-bind posso usar somente :atributo -->
    <ul>
      <li v-for="foto of fotos" :key="foto.titulo">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Banco de imagens de gatinhos',
      fotos: [],
    }
  },
  created() {
    // jeito mais facil
    this.$http
      .get('http://localhost:3000/v1/fotos')
      .then((res) => res.json())
      .then((fotos) => ((this.fotos = fotos), (err) => console.log(err)))
    /*
      jeito mais complexo
      promise.then((res) => {
      res.json().then((fotos) => (this.fotos = fotos))
    })
    */
  },
}
</script>

<style></style>
