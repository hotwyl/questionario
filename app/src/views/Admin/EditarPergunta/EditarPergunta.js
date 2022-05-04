const axios = require("axios");

export default {
    data(){
        return {
            nomePergunta: '',
            valorPergunta: '',
            questionario_Pergunta: '',
            pergunta_id: '',
            arPergunta:[],
        }
    },
        beforeCreate() {
            console.log('beforeCreate');
        } ,
        created() {
            console.log('created');
            this.buscarPergunta();
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
                var id_2 = this.arPergunta.id_questionario; 
                let data = {
                    id: this.arPergunta.id,
                    questao: this.nomePergunta,
                    pontuacao: this.valorPergunta,
                    id_questionario: this.arPergunta.id_questionario,
                    
                };
                console.log(data);
                axios.post(url, data)
                    .then(function (response) {
                        window.location.href = "/admin/questionario/"+id_2;
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    
            },   
            
            buscarPergunta() {
                var id = document.URL.split("/")[5]; 
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/listar/"+id;  
                axios.get(url)
                .then(response => {
                    this.arPergunta = response.data;
                    this.blLoading = false;
                    console.log(this.arPergunta);
                    this.nomePergunta=response.data.questao;
                    this.valorPergunta=response.data.pontuacao.toString();
                })
            },  

            voltarPergunta(){
                var id = document.URL.split("/")[5];
                //console.log("voltar para", id);
                window.location.href = "/admin/pergunta/"+id;
            }
        },
}