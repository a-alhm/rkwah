<template>
<div>

        <v-row style="margin-top: 270px; height: 450px">
        <v-col cols="12" md="4" lg="4">
                  <v-img
          :src="require('../assets/tal.png')"
          max-width="250"
          contain
           class="mx-auto ka-col"
        />
            <v-card class="mx-auto ka-col" max-width="250" >
            <router-link to="/form" class="ka-col" style="text-decoration: none;">
            <v-card-text class="text-h4 text-center">طور موهبتك</v-card-text>
            </router-link>
          </v-card>
            
        </v-col>
        <v-col cols="12" md="4" lg="4">
                            <v-img
          :src="require('../assets/work.png')"
          max-width="250"
          contain
           class="mx-auto ka-col"
        />
            <v-card class="mx-auto ka-col" max-width="250" >
            <router-link to="/form" class="ka-col" style="text-decoration: none;">
            <v-card-text class="text-h4 text-center">ورش العمل</v-card-text>
            </router-link>
          </v-card>
            
        </v-col>
        <v-col cols="12" md="4" lg="4">
                                      <v-img
          :src="require('../assets/wish.png')"
          max-width="250"
          contain
           class="mx-auto ka-col"
        />
            <v-card class="mx-auto ka-col" max-width="250" >
             <router-link to="/form" class="ka-col" style="text-decoration: none;"> 
            <v-card-text class="text-h4 text-center">اشترك في مسابقة وشاح ركوه</v-card-text>
            </router-link>
          </v-card>
            
        </v-col>
      </v-row>
</div>
 
</template>

<script>

export default {
  name: "OptionsPage"
};
</script>

<style>

</style>
