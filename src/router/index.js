import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/usuario/Usuario.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "Product",
    component: Product,
    props: true,
  },
  {
    path: "/login/",
    name: "Login",
    component: Login,
  },
  {
    path: "/usuario/",
    component: Usuario,
    children: [
      {
        path: "",
        name: "Produtos",
        component: UsuarioProdutos,
      },
      {
        path: "compras",
        name: "Compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "Vendas",
        component: UsuarioVendas,
      },
      {
        path: "editar",
        name: "Editar",
        component: UsuarioEditar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
