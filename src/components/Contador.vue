<template>
    <div>
        <h2 class="font-weight-light">
            Contador : {{ contador }}
        </h2>

        <h4 class="font-weight-light">
            Contador : {{ contadorAlias }}
        </h4>

         <h4 class="font-weight-light">
            Contador Multiplicado : {{ contadorMultiplicado }}
        </h4>
        
        <button 
            class="class-btn-lg btn-danger"
            @click="decrementar">
            -
        </button>

        <button 
            class="class-btn-lg btn-success"
            @click="incrementar">
            +
            </button>

    </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
    data(){
        return {
            contadorLocal : 10
        }
    },
    /**
     * Mapeando propries para serem utilizadas no components 
     */
    //computed: mapState(['contador']),
    computed: mapState({
        contador: 'contador',
        contadorAlias: 'contador',
        contadorMultiplicado(state){
            return state.contador * this.contadorLocal
        }
    }),
    methods:{
        decrementar(){
            this.$store.state.contador --
        },
        incrementar(){
            this.$store.state.contador ++
        }
    }
}
</script>