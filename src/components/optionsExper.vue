<template>
<div style="width: 1200px; margin: 100px auto">

        <v-row style="margin-top: 300px">
        <v-col cols="12" md="6" lg="6">
                    <v-img
          :src="require('../assets/mot.png')"
          class="mx-auto ka-col" max-width="400"
          contain
        />
            <v-card class="mx-auto ka-col" max-width="400">
            <router-link to="/form" class="ka-col" style="text-decoration: none;">
            <v-card-text class="text-h4 text-center">تطوع في البرنامج</v-card-text>
            </router-link>
          </v-card>
            
        </v-col>
        <v-col cols="12" md="6" lg="6">
                                  <v-img
          :src="require('../assets/mintor.png')"
          class="mx-auto ka-col" max-width="400"
          contain
        />
            <v-card class="mx-auto ka-col" max-width="400">
            <router-link to="/form" class="ka-col" style="text-decoration: none;">
            <v-card-text class="text-h4 text-center">انضم كمرشد لمسابقة البرنامج</v-card-text>
            </router-link>
          </v-card>
            
        </v-col>
      </v-row>
</div>
 
</template>

<script>

export default {
  name: "OptionsInvPage"
};
</script>

<style>

</style>
