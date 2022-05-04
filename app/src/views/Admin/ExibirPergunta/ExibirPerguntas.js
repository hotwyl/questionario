import axios from "axios";


export default {
    data(){
        return {
            arPergunta: [],
			strPath: process.env.VUE_APP_ROOT_API
        }
    },
    created() {
        this.buscarPergunta();
    },

    methods: {
        EditarAlternativa(id) {
            console.log('Editar alternativa - ', id);
            this.$router.push({ name: 'EditarAlternativa', params: { id: id } })
        },

        EditarPergunta() {
            var id = document.URL.split("/")[5];
            console.log('Editar Pergunta - ', id);
            this.$router.push({ name: 'EditarPergunta', params: { id: id } })
        },

        buscarPergunta() {
            var id = document.URL.split("/")[5];
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/listar/"+id;  
            axios.get(url)
            .then(response => {
                //console.log('retorno', response.data);
                this.arPergunta = response.data;
                console.log(this.arPergunta);
            })
        },

        deletarAlternativa(id,indice) {
            console.log(indice, ' - Excluir Alternativa - ', id);
            console.log(this.arPergunta.respostas);
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/alternativa/deletar/"+id; 
            axios.delete(url);
            console.log('chegou aqui - deletarQuestionario', url);
            this.arPergunta.respostas.splice(indice,1);
        },

        salvarQuestionario() {
           console.log('salvarQuestionario');
        },    

        voltarAlternativa(id){
            console.log('Voltar para pergunta', id);
            window.location.href = "/admin/questionario/"+id;
        },

        cadastrarAlternativa(){
            var id = document.URL.split("/")[5];
            //console.log('Cadastrar Alternativa', id);
            this.$router.push({ name: 'CadastrarAlternativa', params: { id: id } })
           
        },
    }
}