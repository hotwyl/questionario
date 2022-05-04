const axios = require("axios");

export default {
    //el: '#example',
    data() {
        return {
            nomePergunta: '',
            valorPergunta: '',
            questionarioPergunta: '',
            Alternativas: [],
            alternativa: 0,
            correta: 0,    
            corretaAlternativa: [],
            nomeQ: '',
            dialog: false,
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
        if (localStorage.getItem('cats')) {
            try {
                this.cats = JSON.parse(localStorage.getItem('cats'));
            } catch (e) {
                localStorage.removeItem('cats');
            }
        }
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },

    methods: {
        cadastrarPergunta() {
            let url = process.env.VUE_APP_ROOT_API + "/api/questionario/pergunta/salvar";
            //var id = document.URL.split("/")[5];
            var id = this.$route.params.id;
            let data = {
                questao: this.nomePergunta,
                pontuacao: this.valorPergunta,
                id_questionario: id,
                alternativa: this.Alternativas 
            };
            //console.log(data);
            axios.post(url, data)
                .then(function (response) {
                    window.location.href = "/admin/questionario/" + id;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        voltarPergunta() {
            var id = document.URL.split("/")[5];
            //console.log("voltar para", id);
            window.location.href = "/admin/questionario/" + id;
        },

        addAlt() {
            // Garanta que algo foi digitado
            if (!this.alternativa) {

                return;
            }

            let tempAlternativa = {alternativa: this.alternativa, correta: this.correta};
            this.Alternativas.push(tempAlternativa);

            this.alternativa = '';
            this.correta = 0;

            // this.saveAlt();
            this.dialog=false;
            console.log(tempAlternativa);           
        },
        removeAlt(x) {
            this.Alternativas.splice(x, 1);
            this.saveAlt();
        },
        saveAlt() {
            // const parsed = JSON.stringify(this.Alternativas);
            // localStorage.setItem('alternativa', parsed);
        }
    }


}

