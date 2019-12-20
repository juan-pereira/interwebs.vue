   <template>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand">
    <router-link
    style="text-decoration: none; color:#8DCAFF;"
    active-class="active"
    class="a"
    to="/">Inter-Webs</router-link>
    </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link
            tag="a"
            class="active"
            to="/Planos"
          ><a class="nav-link" href="#">Planos<span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item active">
          <router-link
            tag="a"
            class="active"
            to="/contato"
          ><a class="nav-link" href="#">Contato<span class="sr-only">(current)</span></a></router-link>
      </li>
      <router-link
        active-class="active"
        class=""
        to="/LogAdm">
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">For Administrator</a>
      </li>
      </router-link>
    </ul>
  </div>
</nav> 
   </template>
    