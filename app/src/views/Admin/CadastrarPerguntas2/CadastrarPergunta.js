const axios = require("axios");

export default {
    data(){
        return {
            nomePergunta: '',
            valorPergunta: '',
            questionarioPergunta: '',
            nomeQ: '',
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
            cadastrarPergunta() {
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/salvar";  
                var id = document.URL.split("/")[5];
                let data = {
                    questao: this.nomePergunta,
                    pontuacao: this.valorPergunta,
                    id_questionario: id
                };
                console.log(data);
                axios.post(url, data)
                    .then(function (response) {
                        window.location.href = "/admin/questionario/"+id;
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
            },    
            voltarPergunta(){
                var id = document.URL.split("/")[5];
                //console.log("voltar para", id);
                window.location.href = "/admin/questionario/"+id;
            }
        },
}