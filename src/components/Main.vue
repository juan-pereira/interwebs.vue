<template>
    <div>
              <Header class="col-12" title="Inter-Webs" :quantidadeNoCarrinho="quantidadeNoCarrinho" />
        <div class="py-5 bg-info">
          <div class="container">
            <div class="row">
              <div class="p-4 col-lg-8">
                <h2 class="mb-3 text-white text-center">Nós Somos a Inter - Webs<br></h2>
                <div class="blockquote text-muted">
                  <p style="text-align: center; color:#01233F;" class="mb-0 w-100">Especializada em levar tecnlogia e comodidade para os lares e empresas deste imenso Brasil.&nbsp;<br>Nossa internet é de extrema qualidade e segurança e promete levar muito entreterimento e praticidade para todos</p>
                </div>
              </div>
              <div class="col-md-4 align-self-center">
                <img class="img-fluid d-block mx-auto" src="../assets/logo-inter.png" width="100%"> </div>
            </div>
          </div>
        </div>
        <br>
        <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="../assets/fibra.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Como funciona a fibra ótica</h5>
            <p class="card-text">Transmissão de dados e voz em longas distâncias com pouca perda de sinal e qualidade, tudo isso com altíssimas velocidades.</p>
            <div style="text-align:center; margin-top: 115px;">
              <a target="_blank" class="btn btn-info" href="https://www.tecmundo.com.br/infografico/9862-como-funciona-a-fibra-otica-infografico-.htm" role="button">Veja mais!</a>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Atualizados 3 minutos atrás</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/fibra1.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Veja como funcionam e são criados os cabos de fibra óptica</h5>
            <p class="card-text">Você pode não imaginar, mas os cabos de fibra óptica estão fortemente presentes em todo o nosso dia a dia.</p>
            <div style="text-align:center; margin-top:116px;">
              <a target="_blank" class="btn btn-info" href="https://www.tecmundo.com.br/fibra-otica/104718-veja-funcionam-criados-cabos-fibra-optica.htm" role="button">Veja mais!</a>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Atualizados 3 minutos atrás</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/fibra2.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Pesquisadores descobrem forma de acelerar o envio de dados via fibra ótica</h5>
            <p class="card-text">Provedor de internet é um tema complicado no nosso país. As experiências com algumas fornecedoras de serviço pode não ser tão satisfatórias e isso é constatado com bastante frequência.</p>
            <div style="text-align:center;">
              <a target="_blank" class="btn btn-info" href="https://www.tecmundo.com.br/mercado/135650-pesquisadores-descobrem-forma-acelerar-envio-dados-via-fibra-otica.htm" role="button">Veja mais!</a>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Atualizados 3 minutos atrás</small>
          </div>
        </div>
      </div>
        <Footer class="col-15"/>

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
}
</script>