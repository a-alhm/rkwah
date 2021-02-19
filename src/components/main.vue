<template>
<div class="mw1000">
 <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>-->
      <v-col class="mt-10" cols="12">
        <div class="text-h2 mb-3">مرحبا بك في ركوة</div>
        <div class="text-h4 mb-3">الدخول كـ</div>
      </v-col>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <v-hover v-slot="{ hover }">
          <router-link to="/talent" style="text-decoration: none;">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
            <v-icon class="ma-3" size="120px">{{ mdiHiking  }}</v-icon>

            <v-card-text class="text-h4 text-center">موهبة</v-card-text>
          </v-card>
          </router-link>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-hover v-slot="{ hover }">
          <router-link to="/expert" style="text-decoration: none;">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
            <v-icon class="ma-3" size="120px">{{ mdiAccountHardHat  }}</v-icon>

            <v-card-text class="text-h4 text-center">خبير</v-card-text>
          </v-card>
          </router-link>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-hover v-slot="{ hover }">
          <router-link to="/Investor" style="text-decoration: none;">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
            <v-icon class="ma-3" size="120px">{{ mdiDomain }}</v-icon>

            <v-card-text class="text-h4 text-center">حاضنة</v-card-text>
          </v-card>
          </router-link>
          </v-hover>
        </v-col>
      </v-row>
    </v-row>
  </v-container>

</div>
 
</template>

<script>
import { mdiDomain, mdiAccountHardHat, mdiHiking   } from "@mdi/js";

export default {
  name: "main",

  data: () => ({
    mdiDomain: mdiDomain, 
    mdiAccountHardHat: mdiAccountHardHat,
    mdiHiking : mdiHiking,
  })
};
</script>

<style>
.mw1000{
  max-width: 1000px;
  margin: auto;
}

.ka-col{
  cursor: pointer;
}

.ka-col:hover *{
  color: #e13678 !important;
}
</style>
