const axios = require("axios");

export default {
    data(){
        return {
            nomeQuestionario: '',
            descQuestionario: '',
            cadastrado: '',
            modal: '',
            modal2: '',
            date: '',
            date2: '',
            nomeQ: '',
            errors: []
        }
    },
        beforeCreate() {
            console.log('beforeCreate');
        } ,
        created() {
            console.log('created');
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
            cadastrarQuestionario() {
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/salvar";  
                let data = {
                    titulo: this.nomeQuestionario,
                    descricao: this.descQuestionario,
                    inicio_questionario: this.date,
                    limite_questionario: this.date2
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
        },
}