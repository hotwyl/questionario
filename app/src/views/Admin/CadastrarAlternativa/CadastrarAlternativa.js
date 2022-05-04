const axios = require("axios");

export default {
    data(){
        return {
            nomeAlternativa: '',
            corretaAlternativa: '',
            perguntaAlternativa: '',
            arPergunta:[],
            todo:'',
            selected: '',
            items: ['1', '2', '3', '4'],
            cadastrado:'',
            nomeQ: '',
            errors: []
        }
    },
        beforeCreate() {
            console.log('beforeCreate');
        } ,
        created() {
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
                var id = document.URL.split("/")[5]; 
                let data = {
                    alternativa: this.nomeAlternativa,
                    correta: this.corretaAlternativa,
                    id_pergunta: id
                };
                console.log(data);
                axios.post(url, data)
                    .then(function (response) {
                        window.location.href = "/admin/pergunta/"+id;
                        console.log(response.response.data.select);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
            }, 
            buscarPergunta() {
                let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/listar/";  
                axios.get(url)
                .then(response => {
                    this.arPergunta = response.data;
                    this.blLoading = false;
                    console.log(this.arPergunta);
                })
                
            },  
            
            voltarAlternativa(){
                var id = document.URL.split("/")[5];
                //console.log("voltar para", id);
                window.location.href = "/admin/pergunta/"+id;
            },
            
        },
}