<template>
  <div clas="corpo">
    <!-- posso usar também <h1>{{ titulo }}</h1>-->
    <h1 class="centralizado" v-text="titulo"></h1>
    <!-- no lugar de usar v-bind posso usar somente :atributo -->
    <ul class="lista-fotos">
      <li v-for="foto of fotos" :key="foto.titulo" class="lista-fotos-item">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
          </div>
        </div>
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

.imagem-responsiva {
  width: 100%;
}

/* estilo do painel */
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
</style>
