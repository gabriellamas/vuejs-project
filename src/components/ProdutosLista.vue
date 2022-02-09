<template>
  <section class="container-products">
    <transition-group mode="out-in">
      <div v-if="products && products.length" class="products" key="0">
        <div
          v-for="(product, index) in products"
          :key="product.id + index"
          class="product"
        >
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            />
            <p class="product-price">{{ product.preco | numeroPreco }}</p>
            <h2>{{ product.nome }}</h2>
            <p>{{ product.descricao }}</p>
          </router-link>
        </div>
      </div>
      <div
        v-else-if="products && products.length === 0"
        class="no-results"
        key="1"
      >
        <p>Busca sem resultados. tente buscar outro termo.</p>
      </div>
      <PaginaCarregando v-else key="2" />
      <Pagination
        key="3"
        :productsTotal="productsTotal"
        :productsPerPage="productsPerPage"
      />
    </transition-group>
  </section>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import { api } from "@/services";
import { serialize } from "@/helpers";
export default {
  name: "ProdutosLista",
  components: {
    Pagination,
  },
  data() {
    return {
      products: null,
      productsPerPage: 9,
      productsTotal: 0,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.productsPerPage}${query}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      setTimeout(() => {
        api.get(this.url).then((response) => {
          this.products = response.data;
          this.productsTotal = Number(response.headers["x-total-count"]);
        });
      }, 1500);
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.container-products {
  max-width: 1000px;
  margin: 0 auto;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.product-price {
  color: #e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>
