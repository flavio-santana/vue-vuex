<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de Gerenciamento de Estado Centralizado no Vue.</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        
        <div class="col-sm-9 border-right">
          <TarefasLista />
        </div>

        <div class="col-sm-3 ">
          <Contador />
        </div>
        
      </div>
      
    </div>

  </div>
</template>

<script>

/**
Podemos fazer a importação do jeito abaixo, 
porque o nosso projeto foi criado com vue cli 
*/
import Contador from '@/components/Contador'
import TarefasLista from '@/components/TarefasLista.vue'

export default {
  components:{
    Contador,
    TarefasLista
  }

}
</script>