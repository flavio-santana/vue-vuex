import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    /**
     * Todos os dados que precisam ser 
     * compartilhados precisam ficar aqui
     */
    state:{
        contador:0,
        tarefas: []
    },
    /**
     * Usando getters posso utilizar esse método em qualquer lugar da aplicação 
     */
    getters :{
        /*tarefasConcluidas : (state) => {
            return state.tarefas.filter(t => t.concluido)
        }*/
        // Outra forma de implementar 
        tarefasConcluidas : state => state.tarefas.filter(t => t.concluido), 

        tarefasAFazer : state => state.tarefas.filter (t => !t.concluido),

        totalTarefasConcluidas: (State, getters) => getters.tarefasConcluidas.length,

        /*
        buscarTerafaPorId:(state, getters) => {
            return (id) => {
                return state.tarefas.find( t => t.id === id)
            }
        }
        */

        // Metódo implementado de forma simplificado
        buscarTerafaPorId:state => id => state.tarefas.find( t => t.id === id)
    },
    mutations:{
        /*
        listarTarefas:(state, payload) =>{
            state.tarefas = payload.tarefas
        }*/
        /**
         * Outra forma de acessar os valores passados por payload
         */
        listarTarefas:(state, {tarefas, tarefas2}) =>{
            state.tarefas = tarefas2
        }
    }
})