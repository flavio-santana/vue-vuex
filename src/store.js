import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        contador:0,
        tarefas: [
            { id: 1, titulo: 'Aprender Vue', concluido: true },
            { id: 2, titulo: 'Aprender Vue Router', concluido: true },
            { id: 3, titulo: 'Aprender Vuex', concluido: false }
        ]
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
    }
})