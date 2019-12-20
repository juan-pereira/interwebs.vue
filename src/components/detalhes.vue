<template>
  <div class="row">
    <Header class="col-12" />

    <!-- <div class="col-12 mt-5">
      <h3>Esse é o produto com o id {{ $route.params.id }}</h3>
    </div>-->

    <div class="col-5 mt-1">
      <img src="../assets/logo-inter.png" alt="imagem do plano" />
    </div>
    <div class="col-7 mt-1" v-if="esconder">
      <h1>{{ jogo.titulo }}</h1>
      <p v-html="jogo.descricao"></p>
      <p>{{ jogo.valor | emReal("R$ ") }}</p>
    </div>
    <router-view></router-view>
        <Footer class="col-15"/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      todos: {
        id: this.$route.params.id.id,
        title: this.$route.params.id.title,
        descricao: this.$route.params.id.descricao,
        valor: this.$route.params.id.valor
      },
    };
  },
  filters: {
    emReal: function(preco, simbolo) {
      if (!parseInt(preco)) {
        return "";
      }
      var emRealSim = preco.toFixed(2).replace(".", ",");
      return simbolo + " " + emRealSim;
    }
  },
};
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
}

img {
  margin: 0 0 18px 0;
  border: 2px solid black;
  border-radius: 5px;
}
</style>