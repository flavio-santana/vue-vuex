<template>
    <div>
        <h2 class="font-weight-light">
            Contador : {{ contador }}
        </h2>
        
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
export default {
    /*data(){
        return {
            contador: 0
        }
    },*/
    computed:{
        contador(){
            return this.$store.state.contador 
        }
    },
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