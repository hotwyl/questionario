<template>
  <v-app>
    <v-container fluid col-11>
      <div class="px-3">
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="display-1 text--secondary">Questionários Cadastrados</p>
          </v-col>
          <v-col cols="12" class="lista">
            <v-row class="lista__header">
              <v-col md="1" class="text-center">
                <b>STATUS</b>
              </v-col>
              <v-col md="3" class="text-center">
                <b>QUESTIONÁRIOS</b>
              </v-col>
              <v-col md="3" class="text-center">
                <b>DETALHES</b>
              </v-col>
              <v-col md="3" class="text-center">
                <b>PERÍODO</b>
              </v-col>
              <v-col md="2">
                <b>&nbsp;</b>
              </v-col>
            </v-row>
            <v-hover v-for="(item,indice) in arQuestionarios" :key="item.id" class="mb-1">
              <template v-slot="{ hover }">
                <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
                  <v-row>
                    <v-col md="1">
                      <v-checkbox v-model="item.ativo" label="Ativo" disabled></v-checkbox>
                    </v-col>
                    <v-col md="3">{{item.titulo}}</v-col>
                    <v-col md="3">{{item.descricao}}</v-col>
                    <v-col
                      md="3"
                      class="text-center text--disabled"
                      
                    >de {{ item.inicio_questionario | moment("DD/MM/YYYY") }} a {{ item.limite_questionario | moment("DD/MM/YYYY") }}</v-col>
                    <v-col md="2" class="text-right">
                      <v-btn
                        fab
                        dark
                        color="warning"
                        class="ma-1"
                        x-small
                        @click="abrirQuestionario(item.id)"
                      >
                        <v-icon>mdi-television</v-icon>
                      </v-btn>
                      <v-btn
                        fab
                        dark
                        color="primary"
                        class="ma-1"
                        x-small
                        @click="editarQuestionario(item.id)"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      <v-btn
                        fab
                        dark
                        color="error"
                        class="ma-1"
                        x-small
                        @click="deletarQuestionario(item.id,indice)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
            </v-hover>
            <v-row class="lista__body not-found" v-if="blLoading">
              <v-col md="12" class="td text-center">
                <v-progress-circular indeterminate color="grey lighten-1"></v-progress-circular>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <router-link :to="{ name: 'CadastrarQuestionario' }">
        <v-btn fixed fab large dark bottom right color="success" class="v-btn--example">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script src="./ListaQuestionarios.js"></script>