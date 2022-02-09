<template>
  <section>
    <div v-if="product" class="product">
      <ul class="fotos" v-if="product.fotos">
        <li v-for="(foto, index) in product.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="preco">{{ product.preco | numeroPreco }}</p>
        <p class="descricao">{{ product.descricao }}</p>
        <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
        <button class="btn" v-else disabled>Produto vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import { api } from "@/services";
export default {
  name: "Products",
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduto() {
      api
        .get(`/produto/${this.id}`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
