<template>
  <form @submit.prevent="submit">
    <div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
      <v-app>
        <v-container fluid col-8>
          <v-row>
            <v-col cols="12">
              <p class="display-1 text--secondary">Cadastro de Perguntas</p>
            </v-col>
            <v-col cols="10">
              <v-text-field v-model="nomePergunta" label="Questão / Pergunta" required outlined></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field v-model="valorPergunta" label="Valor da Questão" required outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-alert dense elevation="1" colored-border width="95%">
              <v-row v-for="(item, index) in Alternativas" :key="item.alternativa">
                <v-col cols="9">{{item.alternativa}}</v-col>
                <v-col cols="2">
                  <v-checkbox v-model="item.correta" label="Correta" disabled></v-checkbox>
                </v-col>
                <v-col cols="1">
                  <v-btn @click="removeAlt(index)" text small>
                    <v-icon left disabled>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-row>

          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">Adcionar Alternativas</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline text-center">Adcionar Alternativas</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="9">
                        <v-text-field
                          v-model="alternativa"
                          label="Alternativa / Resposta"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="3">
                        <v-checkbox
                          v-model="correta"
                          class="mx-2"
                          label="Certa"
                          v-bind:false-value="0"
                          v-bind:true-value="1"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
                  <v-btn color="blue darken-1" text @click="addAlt">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>

          <v-btn
            color="orange darken-2"
            dark
            @click="voltarPergunta()"
            class="btn-voltar"
            small
            left
          >
            <v-icon dark>mdi-arrow-left</v-icon>Voltar
          </v-btn>

          <v-btn
            color="success"
            dark
            @click="cadastrarPergunta()"
            class="btn-cadastrar"
            small
            right
          >
            <v-icon dark>mdi-checkbox-marked-circle</v-icon>Cadastrar
          </v-btn>
        </v-container>
      </v-app>
    </div>
  </form>
</template>

<script src="./CadastrarPergunta.js"></script>

<style lang="sass">
@import "../Admin.scss"
</style>