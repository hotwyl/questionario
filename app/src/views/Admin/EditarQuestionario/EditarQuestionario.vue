<template>
  <form @submit.prevent="submit">
    <div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
      <v-app>
        <v-container fluid col-8>
          <v-row>
            <v-col cols="12">
              <p class="display-1 text--secondary">Editar Questionário</p>
            </v-col>
            <v-col cols="10">
              <v-text-field
                v-model="nomeQuestionario"
                label="Nome do Questionario"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="ativo" class="mx-2" label="Ativo" v-bind:false-value="0" v-bind:true-value="1"></v-checkbox>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="descQuestionario" outlined label="Descrição"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Data inicial"
                    outlined
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker locale="pt-br" header-color="#00ACC0" v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="6">
              <v-dialog
                ref="dialog2"
                v-model="modal2"
                :return-value.sync="date2"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date2"
                    label="Data limite"
                    outlined
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker locale="pt-br" header-color="#00ACC0" v-model="date2" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>

          <v-btn
            color="orange darken-2"
            dark
            :to="{ name: 'ListarQuestionario' } "
            class="btn-voltar"
            small
            left
          >
            <v-icon dark>mdi-arrow-left</v-icon>Voltar
          </v-btn>

          <v-btn
            color="success"
            dark
            @click="atualizarQuestionario()"
            class="btn-cadastrar"
            small
            right
          >
            Atualizar
            <v-icon dark>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-container>
      </v-app>
    </div>
  </form>
</template>

<script src="./EditarQuestionario.js"></script>

<style lang="sass">
@import "../Admin.scss"
</style>