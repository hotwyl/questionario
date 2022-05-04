<template>
  <v-app>
    <div class="about">
      <v-parallax height="656" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-card class="mx-auto d-flex pa-2" width="750" style="border-radius: 11px">
          <v-container>
            <v-alert
              v-model="alert"
              text
              outlined
              color="info"
              icon="mdi-fire"
              border="left"
            >
              <center>
                <h3 class="headline">
                  <strong>Lista dos Questionários Disponiveis</strong>
                </h3>
              </center>
            </v-alert>

            <div class="text-center">
              <v-btn
                rounded
                block
                large
                outlined
                color="primary"
                to="/questionario"
              >QUESTIONÁRIO - 01</v-btn>
            </div>
          </v-container>
        </v-card>
      </v-parallax>
    </div>
  </v-app>
</template>


<script src="./Inicio.js"></script>