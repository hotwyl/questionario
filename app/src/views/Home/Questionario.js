import axios from "axios";


export default {
    data(){
        return {
            blLoading:false,
            validate:'',
            valid:'',
            radios:'',
            arQuestionarios:[],
			strPath: process.env.VUE_APP_ROOT_API
        }
    },
    created() {
        console.log('created');
        this.buscarQuestionarios();
    },

    methods: {
        // abrirQuestionario(id) {
        //     console.log('abrirQuestionario', id);
        //     this.$router.push({ name: 'Questionario', params: { id: id } })
        // },

        buscarQuestionarios() {
            var id = this.$route.params.id;
            //document.URL.split("/")[3]; 
            let url = process.env.VUE_APP_ROOT_API + "/api/home/"+id;  
            axios.get(url)
            .then(response => {
                this.arQuestionarios = response.data;
                this.blLoading = false;
                //console.log(response.data);
                console.log(this.arQuestionarios);
            })
        },

    
    }
}