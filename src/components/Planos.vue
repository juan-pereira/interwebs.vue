<template>
  <div>
    <Header class="col-12" title="Inter-Webs" :quantidadeNoCarrinho="quantidadeNoCarrinho" />
    <br>
    <h2 style="text-align:center">Veja abaixo alguns dos nossos planos!</h2>
    <br>

    <div class="todos">
      
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete':todo.completed}"
      >
      


            <img style="text-align:center;" src="../assets/logo-inter.png">
            <br>
            {{ todo.title }}
            <br>
            {{todo.descricao}}
            <br>
            {{todo.valor|emReal("R$ ")}}
            <br>
        </div>
        </div>
        <Footer class="col-15"/>
      </div>  
</template>

<script>
import Header from "./Header";
import Footer from './Footer';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "my-form",
  components: {
    Header, Footer
  },
    
  
    filters:{
    emReal: function(preco, simbolo){
      if(!parseInt(preco)){
        return ""
      }
      var emRealSim = (preco.toFixed(2).replace(".",","));
      return simbolo + " " + emRealSim
    }
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDoubleClick(todo) {
      const updTodo = {
        id: todo.id,
        title: "ESTE TITULO FOI MODIFICADO",
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #cccccc;
  background: #1BBC9B;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
