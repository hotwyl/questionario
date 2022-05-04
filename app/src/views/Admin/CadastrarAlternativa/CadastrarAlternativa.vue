<template>
  <form @submit.prevent="submit">
    <div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
      <v-app>
        <v-container fluid col-8>
          <v-row>
            <v-col cols="12">
              <p class="display-1 text--secondary">Cadastro de Alternativas</p>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="nomeAlternativa"
                label="Alternativa / Resposta"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-radio-group v-model="corretaAlternativa" row required outlined>
                <v-radio label="Errada" value="0"></v-radio>
                <v-radio label="Correta" value="1"></v-radio>
              </v-radio-group>
            </v-col>
            
          </v-row>
          <v-col>
            <v-row>
              <v-alert
                v-if="cadastrado"
                class="msg-erro"
                type="error"
              >Verifique os campos incorretos.</v-alert>
            </v-row>
          </v-col>

          <v-btn
            color="orange darken-2"
            dark
            @click="voltarAlternativa()"
            class="btn-voltar"
            small
            left
          >
            <v-icon dark>mdi-arrow-left</v-icon>Voltar
          </v-btn>

          <v-btn
            color="success"
            dark
            @click="cadastrarAlternativa()"
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

<script src="./CadastrarAlternativa.js"></script>

<style lang="sass">
@import "../Admin.scss"
</style>