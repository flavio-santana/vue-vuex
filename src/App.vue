<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de Gerenciamento de Estado Centralizado no Vue.</p>
      </div>
    </div>

    <div class="container">

      <Contador />

    </div>

  </div>
</template>

<script>

/**
 Podemos fazer a importação do jeito abaixo, porque o nosso projeto foi criado com vue cli
 */
import Contador from '@/components/Contador'

export default {
  components:{
    Contador
  }

}
</script>