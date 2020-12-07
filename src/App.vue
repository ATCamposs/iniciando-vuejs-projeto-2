<template>
  <div clas="corpo">
    <!-- posso usar também <h1>{{ titulo }}</h1>-->
    <h1 class="centralizado" v-text="titulo"></h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do titulo"
      @input="filtro = $event.target.value"
    />
    <!-- no lugar de usar v-bind posso usar somente :atributo -->
    <ul class="lista-fotos">
      <li
        v-for="foto of fotosComFiltro"
        :key="foto.titulo"
        class="lista-fotos-item"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            :url="foto.url"
            :titulo="foto.titulo"
          ></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel'
import ImagemResponsiva from './components/shared/imagem-responsiva/imagemResponsiva'
export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
  },

  data() {
    return {
      titulo: 'Banco de imagens de gatinhos',
      fotos: [],
      filtro: '',
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        const exp = new RegExp(this.filtro.trim(), 'i')
        return this.fotos.filter((foto) => exp.test(foto.titulo))
      } else {
        return this.fotos
      }
    },
  },

  created() {
    // jeito mais facil
    this.$http
      .get('http://localhost:3000/v1/fotos')
      .then((res) => res.json())
      // eslint-disable-next-line no-sequences
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

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
