import axios from "axios";


export default {
    data(){
        return {
            blLoading:false,
            arQuestionarios: [],
            id:[],
			strPath: process.env.VUE_APP_ROOT_API
        }
    },
    created() {
        this.buscarQuestionarios();
    },

    methods: {
        abrirQuestionario(id) {
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/"+id; 
            console.log('chegou aqui - abrirQuestionario', url);
            this.$router.push({ name: 'ExibirQuestionario', params: { id: id } })
        },

        deletarQuestionario(id,indice) {
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/deletar/"+id; 
            axios.delete(url);
            console.log('chegou aqui - deletarQuestionario', url);
            this.arQuestionarios.splice(indice,1);
            //return location.reload();
        },

        editarQuestionario(id) {
            console.log('chegou aqui - editarQuestionario', id);
            this.$router.push({ name: 'EditarQuestionario', params: { id: id } })
        },

        buscarQuestionarios() {
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario";  
            axios.get(url)
            .then(response => {
                this.arQuestionarios = response.data;
				this.blLoading = false;
            })
        },

    
    }
}