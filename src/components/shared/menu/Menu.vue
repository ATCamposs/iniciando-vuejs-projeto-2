<template>
  <nav>
    <ul>
      <li v-for="route in rotas" :key="route.path">
        <router-link :to="route.path ? route.path : '/'">{{
          route.titulo
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    rotas: {
      // como declarar um type array
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
