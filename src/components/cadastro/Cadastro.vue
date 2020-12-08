<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" v-model="foto.titulo" autocomplete="off" />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" v-model.lazy="foto.url" autocomplete="off" />
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          v-model="foto.descricao"
          autocomplete="off"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link to="/"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'
import Foto from '../../domain/foto/Foto'
import FotoService from '../../domain/foto/FotoService'

export default {
  components: {
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,
  },

  data() {
    return {
      foto: new Foto(),
    }
  },

  created() {
    this.service = new FotoService(this.$resource)
    this.resource = this.$resource('v1/fotos')
  },

  methods: {
    grava() {
      // jeito antigo
      // this.$http.post('v1/fotos', this.foto)
      // this.resource.save(this.foto)
      this.service.cadastra(this.foto).then(
        () => (this.foto = new Foto()),
        (err) => console.log(err)
      )
    },
  },
}
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
