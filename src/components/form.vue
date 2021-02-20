<template>
<div style="width: 500px; margin: 100px auto">
  <v-form>
                      <div style="color: #625c5c" class="text-h4 mb-3 text-center">إنشاء حساب في ركوة</div>

    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            label="الاسم"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            label="البريد الالكتروني"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
        >
        <v-select
          :items="items"
          label="الفئة"
          required
        ></v-select>
        </v-col>
      </v-row>
      
    </v-container>

          <v-row>
        <v-col
          cols="5"
        >

        </v-col>

        <v-col
          cols="2"
        >
          <v-btn
        class="mr-4"
      >
        ارسال
      </v-btn>
        </v-col>
        
        <v-col
          cols="5"
        >

        </v-col>
      </v-row>

  </v-form>
</div>
</template>

<script>

export default {
  name: "form",
  data(){
      return {
          items: ['حاضنة', 'خبير', 'موهبة']
      }
  }
};
</script>

<style>

</style>
