<template>
  <div class="admin">
    <!-- Nav Bar -->

    <v-toolbar color="#00ACC0" dense dark>
    <v-spacer />
      <v-toolbar-title class="titulo-toolbar">
        <router-link :to="{ name: 'ListarQuestionario' }">ADMIN</router-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: false,
    };
  },
};
</script>

<style lang="sass">
@import "./Admin.scss"
</style>