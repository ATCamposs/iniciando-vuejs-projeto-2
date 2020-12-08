<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
      <!-- Para exibir os campos do componente corretamente trocar div por slot -->
      <!-- v-show nao pode ser usado no slot, por isso a criação da div-->
      <div v-show="visivel" class="painel-conteudo">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      visivel: true,
    }
  },
}
</script>
<!-- Para deixar o css para somente o componente etc use <style scoped> -->
<style scoped>
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

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.4s;
}

.painel-conteudo {
  overflow: hidden;
}
</style>
