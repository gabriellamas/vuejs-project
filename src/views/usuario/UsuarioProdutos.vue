<template>
  <section class="usuario-produtos">
    <h2>Adicionar produto</h2>
    <ProdutoAdicionar />
    {{ usuario_produtos }}
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoAdicionar,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
};
</script>

<style scoped></style>
