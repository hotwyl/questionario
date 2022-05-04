const axios = require("axios");

export default {
    data(){
        return {
            nomeQuestionario: '',
            descQuestionario: '',
            cadastrado: '',
            ativo:'',
            modal: '',
            modal2: '',
            date: '',
            date2: '',
            nomeQ: '',
            errors: [],
            arQuestionario:[],
        }
    },
        beforeCreate() {
            console.log('beforeCreate');
        } ,
        created() {
            console.log('created');
            this.buscarQuestionario();
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted(){
            console.log('mounted');
        },
        beforeDestroy(){
            console.log('beforeDestroy');
        },
        destroyed(){
            console.log('destroyed');
        },
        
        methods: {
            atualizarQuestionario() {
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/salvar";  
                let data = {
                    id: this.arQuestionario.id,
                    ativo: this.ativo,
                    titulo: this.nomeQuestionario,
                    descricao: this.descQuestionario,
                    inicio_questionario: this.date,
                    limite_questionario: this.date2,
                };
                console.log(data);
                axios.post(url, data)
                    .then(function (response) {
                        window.location.href = "/admin";
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 
            buscarQuestionario() {
                var id = document.URL.split("/")[5]; 
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/"+id;  
                axios.get(url)
                .then(response => {
                    this.arQuestionario = response.data;
                    this.blLoading = false;
                    console.log(this.arQuestionario);
                    this.ativo=this.arQuestionario.ativo;
                    this.nomeQuestionario=this.arQuestionario.titulo;
                    this.descQuestionario=this.arQuestionario.descricao;
                    this.date=this.arQuestionario.inicio_questionario;
                    this.date2=this.arQuestionario.limite_questionario;
                    
                })
            },     
        },
}