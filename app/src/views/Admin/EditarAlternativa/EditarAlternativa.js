const axios = require("axios");

export default {
    data(){
        return {
            nomeAlternativa: '',
            corretaAlternativa: '',
            arAlternativa:[],
            id_alternativa:'',
            id_perguta:'',
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
            cadastrarAlternativa() {
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/alternativa/salvar"; 
                var id_2 = this.arAlternativa.id_pergunta; 
                let data = {
                    id: this.arAlternativa.id,
                    alternativa: this.nomeAlternativa,
                    correta: this.corretaAlternativa,
                    id_pergunta: this.arAlternativa.id_pergunta,
                };
                console.log(data);
                axios.post(url, data)
                    .then(function (response) {
                        window.location.href = "/admin/pergunta/"+id_2;
                        console.log(response.response.data.select);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
            }, 
            buscarPergunta() {
                var id = document.URL.split("/")[5]; 
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/alternativa/listar/"+id;  
                axios.get(url)
                .then(response => {
                    this.arAlternativa = response.data;
                    this.blLoading = false;
                    console.log(this.arAlternativa);
                    this.nomeAlternativa=response.data.alternativa;
                    this.corretaAlternativa=response.data.correta.toString();
                })
            },  
            
            voltarAlternativa(){
                var id = document.URL.split("/")[5];
                window.location.href = "/admin/pergunta/"+id;
            },
            
        },
}