<template>
  <v-app>
    <v-container fluid col-10>
      <div class="px-3">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-alert text color="info" align="center">
                <h3 class="headline">{{ arQuestionarios.titulo }}</h3>

                <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
                <div>{{ arQuestionarios.descricao }}</div>

                <v-spacer></v-spacer>
              </v-alert>
            </v-col>
            <v-col cols="12" class="lista">
              <v-hover
                v-for="(item, index) in arQuestionarios.perguntas"
                :key="item.pergunta"
                class="mb-5"
              >
                <template v-slot="{ hover }">
                  <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-5">
                    <v-row class="pa-3">
                      <v-alert border="left" dense>
                        <b>{{item.questao}}</b>
                      </v-alert>
                    </v-row>
                    <v-row
                      v-for="item in arQuestionarios.perguntas[index].respostas"
                      :key="item.id"
                    >
                      <v-col md="1">
                        <v-radio-group v-model="radios">
                          <v-radio></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col md="10">{{item.alternativa}}</v-col>
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

          <v-btn color="success" block dark x-large style="float: right; width: 222px">
            Responder
            <v-icon dark>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-form>
      </div>
    </v-container>
  </v-app>
</template>

<script src="./Questionario.js"></script>