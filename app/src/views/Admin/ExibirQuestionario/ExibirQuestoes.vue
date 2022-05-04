
<template>
  <v-app>
    <v-container fluid col-10>
      <v-form ref="form" lazy-validation>
        <v-alert text color="info">
          <h3 class="headline text-center">
            <b>Questionário:</b> {{arQuestionario.titulo}}
            </h3>
          <v-divider class="my-4 info" style="opacity: 0.25"></v-divider>
          <p class="text-center">{{arQuestionario.descricao}}</p>
          <v-row class="text-center" color="dark">
            <v-col md="4">
              <v-row justify="center" align="center">
    <v-chip class="ma-2"
      color="gray"
      outlined
      pill>Dada Inicial: {{arQuestionario.inicio_questionario}}</v-chip>
  </v-row>
            </v-col>
            <v-col md="4">
              <v-row justify="center" align="center">
    <v-chip class="ma-2"
      color="gray"
      outlined
      pill>Data Limite: {{arQuestionario.limite_questionario}}</v-chip>
  </v-row>
            </v-col>
            <v-col md="4">
              <v-row justify="center" align="center">
    <v-chip class="ma-2"
      color="gray"
      outlined
      pill>Status: {{arQuestionario.ativo}}</v-chip>
  </v-row>
            </v-col>
          </v-row>
        </v-alert>

        
        <div>
          <v-hover v-for="(item, index) in arQuestionario.perguntas" :key="item.questao" class="mb-1">
            <template v-slot="{ hover }">
              <v-alert color="cyan" border="left" elevation="2" colored-border>
                <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-1" style="cursor:pointer">
                  <v-row>
                    <v-col md="8"><i>Questão {{ index }} - </i> {{item.questao}}</v-col>
                    <v-col md="2" class="text-center text--disabled"><i>Valor: </i> {{item.pontuacao}} <i>Pontos</i></v-col>
                    <v-col md="2">
                      <v-btn class="ma-1" tile large color="cyan" icon @click="ExibirPergunta(item.id)">
                        <v-icon left>mdi-television</v-icon>
                      </v-btn>
                      <v-btn class="ma-1" tile large color="cyan" icon @click="editarPergunta(item.id)">
                        <v-icon left>mdi-pencil</v-icon>
                      </v-btn>
                      <v-btn class="ma-1" tile large color="cyan" icon @click="deletarPergunta(item.id, index)">
                        <v-icon left>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-alert>
            </template>
          </v-hover>
        </div>

        <div class="text-center my-8">
          <v-btn small color="red" class="mr-12 col-3" :to="{ name: 'ListarQuestionario' }">
            <v-icon dark>mdi-arrow-left</v-icon>Voltar
          </v-btn>

          <v-btn small color="green" dark class="mr-12 col-3" @click="cadastrarPergunta()">
            Adicionar Nova Pergunta <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn small color="blue" class="mr-12 col-3" @click="editarQuestionario()">
            Editar Questionário
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>

<script src="./ExibirQuestoes.js"></script>