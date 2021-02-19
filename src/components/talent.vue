<template>
<div>

        <v-tabs
      v-model="tab"
      centered  grow color="#e13678">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
          <span class="font-s">ركوات</span>
      </v-tab>


      <v-tab href="#tab-2">
          <span class="font-s">وشاح ركوه</span>
      </v-tab>
    </v-tabs>
</div>
 
</template>

<script>

export default {
  name: "TalentPage"
};
</script>

<style>

</style>
