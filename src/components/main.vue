<template>
<div class="mw1000">
 <v-container>
    <v-row class="text-center" style="color: #625c5c">
      <v-col class="mt-10" cols="12">
        <div class="text-h2 mb-3">مرحبا بك </div>
        <div class="text-h3 mb-3" style="margin:50px">ركوه هو الإسم التراثي الذي يعبر عن المكان الذي  يضع فيه الأهالي أبناءهم قديمًا، فيكون محضن وملاذ آمن لهم </div>
        <br>
        <div class="text-h2 mb-3">الدخول كـ</div>
      </v-col>
      <v-row>
        <v-col cols="12" md="4" lg="4">
                                                              <v-img
          :src="require('../assets/1753.png')"
          class="mx-auto ka-col" max-width="250"
          contain
        />
          <v-hover v-slot="{ hover }">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
          <router-link to="/talent" style="text-decoration: none;">

            <v-card-text class="text-h3 text-center">موهبة</v-card-text>
                    </router-link>

          </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" lg="4">
                                                                 <v-img
          :src="require('../assets/man.png')"
          class="mx-auto ka-col" max-height="300"
          contain
        />
          <v-hover v-slot="{ hover }">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
                    <router-link to="/expert" style="text-decoration: none;">
            <v-card-text class="text-h3 text-center">خبير</v-card-text>
                    </router-link>
          </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" lg="4">
                                                                    <v-img
          :src="require('../assets/Untitled-123.png')"
          class="mx-auto ka-col"  max-height="300"
          contain
        />
          <v-hover v-slot="{ hover }">
          <v-card class="mx-auto ka-col" max-width="250" :class="{ 'ka-col': hover }">
                    <router-link to="/Investor" style="text-decoration: none;">

            <v-card-text class="text-h3 text-center">حاضنة</v-card-text>
                    </router-link>

          </v-card>

          </v-hover>
        </v-col>
                <v-col class="mt-10" cols="12" style="color: #625c5c">
        <div class="text-h3 mb-3">حاضنة ركوه.. هي منصة تفاعلية لطلاب التعليم العام تقدم لهم العديد من البرامج التدريبية وورش العمل في مجالات مواهبهم في الأنشطة اللاصفية <br> عبر شبكة من الخبراء المتطوعين عن بعد<br> كما تربط بين الطلاب المميزين وبين الجهات المانحة للدعم والمنح الدراسية
 </div>
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

.ka-col:hover *{
  color: #e13678 !important;
}
</style>
