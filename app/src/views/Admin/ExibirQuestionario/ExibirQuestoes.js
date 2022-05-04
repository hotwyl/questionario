import axios from "axios";


export default {
    data(){
        return {
            blLoading:false,

            arQuestionario: [],
			strPath: process.env.VUE_APP_ROOT_API
        }
    },
    created() {
        this.buscarQuestionarios();
    },

    methods: {
        cadastrarPergunta() {
            var id = document.URL.split("/")[5];
            //console.log('cadastrarPergunta - ', id);
            this.$router.push({ name: 'CadastrarPergunta', params: { id: id } })
        },

        buscarQuestionarios() {
            var id = document.URL.split("/")[5];
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/"+id;  
            axios.get(url)
            .then(response => {
                console.log('retorno', response.data);
                this.arQuestionario = response.data;
            })
        },

        ExibirPergunta(id) {
            //console.log('Exibir Pergunta', id);
            this.$router.push({ name: 'ExibirPergunta', params: { id: id } })
        },

        deletarPergunta(id,indice) {
            console.log(indice, 'Deletar Pergunta', id);
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/deletar/"+id; 
            axios.delete(url);
            console.log('chegou aqui - deletarQuestionario', url);
            this.arQuestionario.perguntas.splice(indice,1);
        },

        salvarQuestionario() {
           console.log('salvarQuestionario');
        },
        
        editarPergunta(id) {
            console.log('editarPergunta', id);
            //var id2 = document.URL.split("/")[5];
            //console.log('Editar Pergunta - ', id2);
            this.$router.push({ name: 'EditarPergunta', params: { id: id } })
         },

         editarQuestionario(){
            var id = document.URL.split("/")[5];
            console.log('editarQuestionario', id);
            this.$router.push({ name: 'EditarQuestionario', params: { id: id } })
         }
          
    }
}