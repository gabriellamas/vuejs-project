<template>
  <div>
    <ul v-if="paginasTotal > 1">
      <li v-for="pagina in paginasTotal" :key="pagina">
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    productsTotal: {
      type: Number,
      default: 1,
    },
    productsPerPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginasTotal() {
      const total = Math.ceil(this.productsTotal / this.productsPerPage);
      return total !== Infinity ? total : 0;
    },
  },
};
</script>

<style>
ul {
  grid-column: 1/-1;
}
li {
  display: inline-block;
}
li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a.router-link-exact-active:hover {
  background: #87f;
  color: #fff;
}
</style>
