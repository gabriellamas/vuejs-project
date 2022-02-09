<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />

      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />

      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_Blank">Perdeu a senha? Clique aqui.</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
};
</script>

<style scoped></style>
