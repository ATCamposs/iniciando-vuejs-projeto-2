<template>
  <button
    :class="estiloDoBotao"
    class="botao"
    :type="tipo"
    @click="disparaAcao()"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      default: '',
    },
    rotulo: {
      type: String,
      default: '',
    },
    confirmacao: {
      type: Boolean,
      default: false,
    },
    estilo: {
      type: String,
      default: 'padrao',
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo === 'padrao') return 'botao-padrao'
      if (this.estilo === 'perigo') return 'botao-perigo'
      return 'botao-padrao'
    },
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm('Confirma operação ?')) {
          this.$emit('botaoAtivado')
        }
      }
      this.$emit('botaoAtivado')
    },
  },
}
</script>
<style>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
}
</style>
