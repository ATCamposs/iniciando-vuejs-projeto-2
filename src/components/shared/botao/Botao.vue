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
      required: true,
    },
    rotulo: {
      type: String,
      default: '',
      required: true,
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
        if (confirm('Confirma operação?')) {
          this.$emit('botaoAtivado')
        }
        return
      }
      this.$emit('botaoAtivado')
    },
  },
}
</script>
<style scoped lang="scss">
@import './Botao.scss';
</style>
