import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [

//HOME

  {
      path: '/questionario/:id',
      name: 'Home',
      component: () => import('@/views/Home/Questionario.vue')
    },

    // {
    //   path: '/questionario',
    //   name: 'Questionario',
    //   component: () => import('@/views/Home/Questionario.vue')
    // },
 
    
//ADMIN

    {
    path:'/admin',
    component: () => import('@/views/Admin/LayoutAdmin.vue'),
    children: [
      //questionários
      {
        path: '',
        name: 'ListarQuestionario',
        component: () => import('@/views/Admin/ListarQuestionarios/ListaQuestionarios.vue')
      },
      {
        path: 'questionario/cadasatrar',
        name: 'CadastrarQuestionario',
        component: () => import('@/views/Admin/CadastrarQuestionarios/CadastrarQuestionario.vue')
      },
      {
        path: 'questionario/:id',
        name: 'ExibirQuestionario',
        component: () => import('@/views/Admin/ExibirQuestionario/ExibirQuestoes.vue')
      },
      {
        path: 'questionario/:id/editar',
        name: 'EditarQuestionario',
        component: () => import('@/views/Admin/EditarQuestionario/EditarQuestionario.vue')
      },

      //perguntas
      {
        path: 'pergunta/:id/cadastrar',
        name: 'CadastrarPergunta',
        component: () => import('@/views/Admin/CadastrarPerguntas/CadastrarPergunta.vue')
      },
      {
        path: 'pergunta/:id/editar',
        name: 'EditarPergunta',
        component: () => import('@/views/Admin/EditarPergunta/EditarPergunta.vue')
      },
      {
        path: 'pergunta/:id',
        name: 'ExibirPergunta',
        component: () => import('@/views/Admin/ExibirPergunta/ExibirPerguntas.vue')
      },

      //Alternativas
      {
        path: 'alternativa/:id/cadastrar',
        name: 'CadastrarAlternativa',
        component: () => import('@/views/Admin/CadastrarAlternativa/CadastrarAlternativa.vue')
      },
      {
        path: 'alternativa/:id/editar',
        name: 'EditarAlternativa',
        component: () => import('@/views/Admin/EditarAlternativa/EditarAlternativa.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
