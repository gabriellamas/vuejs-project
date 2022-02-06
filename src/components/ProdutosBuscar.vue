<template>
  <form>
    <input
      name="busca"
      id="search"
      type="text"
      v-model="busca"
      placeholder="Buscar..."
    />
    <input
      id="lupa"
      type="submit"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  data: () => ({
    busca: "",
  }),
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style>
form {
  position: relative;
  max-width: 600px;
  margin: 30px auto 60px auto;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
