<template>
  <form @submit.prevent="submit">
    <div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
      <v-app>
        <v-container fluid col-8>
          <v-row>
            <v-col cols="12">
              <p class="display-1 text--secondary">Editar Pergunta</p>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="nomePergunta"
                label="Questão / Pergunta"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="valorPergunta"
                label="Valor da Questão"
                required
                outlined
              ></v-text-field>
            </v-col>
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
            Atualizar <v-icon dark>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-container>
      </v-app>
    </div>
  </form>
</template>

<script src="./EditarPergunta.js"></script>

<style lang="sass">
@import "../Admin.scss"
</style>