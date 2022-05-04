
<template>
  <v-app>
    <v-container fluid col-10>
      <v-form ref="form" lazy-validation>
        <v-alert text color="info">
          <h3 class="headline text-center">
            <b>Pergunta:</b>
            {{arPergunta.questao}}
          </h3>
          <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
          <p class="text-center">
            <i>Pontuação:</i>
            <b>{{arPergunta.pontuacao}}</b>
          </p>
        </v-alert>

        <div>
          <v-hover
            v-for="(item, index) in arPergunta.respostas"
            :key="item.alternativa"
            class="mb-1"
          >
            <template v-slot="{ hover }">
              <v-alert color="cyan" border="left" elevation="2" colored-border>
                <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-1" style="cursor:pointer">
                  <v-row>
                    <v-col md="9">
                      <i>Alternativa {{ index }} -</i>
                      {{item.alternativa}}
                    </v-col>
                    <v-col md="1">
                      <v-checkbox v-model="item.correta" label="Correta" disabled></v-checkbox>
                    </v-col>
                    <v-col md="2">
                      <v-btn
                        class="ma-1"
                        tile
                        large
                        color="cyan"
                        icon
                        @click="EditarAlternativa(item.id)"
                      >
                        <v-icon left>mdi-pencil</v-icon>
                      </v-btn>
                      <v-btn
                        class="ma-1"
                        tile
                        large
                        color="cyan"
                        icon
                        @click="deletarAlternativa(item.id, index)"
                      >
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
          <v-btn
            small
            color="red"
            class="mr-12 col-3"
            @click="voltarAlternativa(arPergunta.id_questionario)"
          >
            <v-icon dark>mdi-arrow-left</v-icon>Voltar
          </v-btn>

          <v-btn small color="green" dark class="mr-12 col-3" @click="cadastrarAlternativa()">
            Adicionar Nova Alternativa
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn small color="blue" class="mr-12 col-3" @click="EditarPergunta()">Editar Pergunta</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>

<script src="./ExibirPerguntas.js"></script>