<template>
  <div class="row">
     <Header class="col-12" :quantidadeNoCarrinho="quantidadeNoCarrinho" />

<!-- <PedidoFinalizado :pedido="pedido"></PedidoFinalizado>  -->

    <div style="margin: 0 auto;" >
      <form >
        <div class="form-group">
          <label for="pedido.primeiroNome">Primeiro nome</label>
          <input
           type="text"
           class="form-control"
           id="primeiroNome"
           placeholder="Digita o primeiro nome"
           v-model.trim.lazy="pedido.primeiroNome"
         />
        </div>
        <div class="form-group">
          <label for="ultimoNome">Último nome</label>
          <input
           type="text"
           class="form-control"
           id="ultimoNome"
           placeholder="Digite o último nome"
           v-model.trim.lazy="pedido.ultimoNome"
         />
        </div>
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input
           type="text"
           class="form-control"
           id="endereco"
           placeholder="Digita o endereço"
           v-model.trim.lazy="pedido.endereco"
         />
        </div>
        <div class="form-group">
          <label for="cidade">Cidade</label>
          <input
           type="text"
           class="form-control"
           id="cidade"
           placeholder="Digita a cidade"
           v-model.trim.lazy="pedido.cidade"
         />
        </div>
        <div class="form-group">
          <label for="estado">Estado</label>
          <select class="form-control" id="estado" v-model="pedido.estado">
            <option disabled value>Escolha um estado</option>
            <option
             v-for="(estado, key) in estados"
             v-bind:value="estado"
             v-bind:key="key"
           >{{ key }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cep">CEP</label>
          <input
           type="number"
           class="form-control"
           id="cep"
           placeholder="Digita o CEP"
           v-model.number="pedido.cep"
         />
        </div>
        <div class="form-group form-check">
          <input
           type="checkbox"
           class="form-check-input"
           id="pagoNaEntrega"
           v-bind:true-value="pedido.simNaEntrega"
           v-bind:false-value="pedido.naoNaEntrega"
           v-model="pedido.pagoNaEntrega"
         />
          <label class="form-check-label" for="pagoNaEntrega">Pago na entrega?</label>
        </div>
        <div class="form-group form-check-inline">
          <input
           type="radio"
           class="form-check-input"
           id="manha"
           value="Manhã"
           v-model="pedido.entrega"
         />
          <label class="form-check-label" for="manha">Manhã</label>
        </div>
        <div class="form-group form-check-inline">
          <input
           type="radio"
           class="form-check-input"
           id="tarde"
           value="Tarde"
           v-model="pedido.entrega"
         />
          <label class="form-check-label" for="tarde">Tarde</label>
        </div>
        <div class="form-group form-check-inline">
          <input
           type="radio"
           class="form-check-input"
           id="noite"
           value="Noite"
           v-model="pedido.entrega"
         />
          <label class="form-check-label" for="noite">Noite</label>
        </div>
 
        <div style="text-align:center; margin-bottom: 10px;">
          <button
           type="submit"
           class="btn btn-primary"
           v-on:click="submitFormulario"
         >Enviar</button>

        </div>
      </form>

    </div>
    <div class="col-12">
      <pre>
        <h4>Confirmação de dados de compra:</h4>
          Primeiro nome: {{ pedido.primeiroNome }}
          Último nome: {{ pedido.ultimoNome }}
          Endereço: {{ pedido.endereco }}
          Cidade: {{ pedido.cidade }}
          Estado: {{ pedido.estado }}
          CEP: {{ pedido.cep }}
          Pago na entrega?: {{ pedido.pagoNaEntrega }}
          Entrega: {{ pedido.entrega }}

          <p :quantidadeNoCarrinho="quantidadeNoCarrinho"></p>
        </pre>
    </div>
        <Footer class="col-12"/>

  </div>
</template>
 
<script>
import Header from './Header';
import Footer from './Footer'
 
export default {
  name: "my-form",
  components: {
    Header, Footer
  },
  data() {
  
    return {
      pedido: {
        primeiroNome: "",
        ultimoNome: "",
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        pagoNaEntrega: "Não",
        simNaEntrega: "Sim",
        naoNaEntrega: "Não",
        entrega: "Manhã"
      },
      estados: {
        RJ: "Rio de Janeiro",
        MG: "Minas Gerais",
        SP: "São Paulo",
        ES: "Espírito Santo"
      },
    };
  },
  
  methods: {
    submitFormulario() {
      alert("Formulário enviado com sucesso!!");
      this.$router.push("/" );
    }
  }
  
};

</script>
 
<style scoped>

#largura{
    text-align: center;
}

pre{
  text-align: center;
  border: 2px solid black;
  background-color: #000000;
  color: white;
  border-radius: 7px;
  word-wrap: break-word;

}

h4{
  text-align: center;
}

</style>