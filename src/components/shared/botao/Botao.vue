<template>
  <button class="botao botao-perigo" :type="tipo" @click="disparaAcao()">
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
  },
  methods: {
    disparaAcao() {
      if (confirm('Confirma operação ?')) {
        this.$emit('botaoAtivado', new Date())
      }
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
