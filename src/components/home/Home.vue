<template>
  <div>
    <!-- posso usar também <h1>{{ titulo }}</h1>-->
    <h1 class="centralizado" v-text="titulo"></h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
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
        <meu-painel v-meu-transform.reverse :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:scale.animate="1.2"
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao rotulo="Alterar" tipo="button" />
          </router-link>
          <!-- Ao adicionar .native no componente ele suporta ex @click -->
          <!-- Ao usar databind(:) na confirmacao, o valor não vai como uma
          string, e sim como um dado, oque aceita outros tipos alem (de string) -->
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            :confirmacao="true"
            estilo="padrao"
            @botaoAtivado="remove(foto)"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva'
import Painel from '../shared/painel/Painel'
import Botao from '../shared/botao/Botao'
import FotoService from '../../domain/foto/FotoService'
export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,
  },

  data() {
    return {
      titulo: 'Banco de imagens de gatinhos',
      fotos: [],
      filtro: '',
      mensagem: this.mensagem,
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
    this.service = new FotoService(this.$resource)
    this.service.lista().then(
      (fotos) => (this.fotos = fotos),
      (err) => {
        this.mensagem = err.message
      }
    )
    // jeito mais facil
    // this.$http
    //  .get('v1/fotos')
    //  .then((res) => res.json())
    // eslint-disable-next-line no-sequences
    //  .then((fotos) => ((this.fotos = fotos), (err) => console.log(err)))
    /*
      jeito mais complexo
      promise.then((res) => {
      res.json().then((fotos) => (this.fotos = fotos))
    })
    */
  },

  methods: {
    remove(foto) {
      // jeito antigo
      // this.$http.delete(`v1/fotos/${foto._id}`)
      // this.resource.delete({ id: foto._id })
      this.service.apaga(foto._id).then(
        () => {
          const indice = this.fotos.indexOf(foto) // acha a posição da foto na lista
          this.fotos.splice(indice, 1) // a instrução altera o array
          this.mensagem = 'Foto removida com sucesso'
        },
        (err) => {
          this.mensagem = err.message
        }
      )
    },
  },
}
</script>

<style>
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
