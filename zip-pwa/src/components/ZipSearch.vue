<template lang="pug">
  ion-grid
    form(@submit="onSubmit")
      ion-col
        ion-item
          ion-label Zip code:
          ion-input(
            name="zip"
            :value="zip"
            @input="zip = $event.target.value"
            placeholder="Enter a US zip code"
          )
      ion-col
        ion-button(type="submit" color="primary" expand="block") Find
  
</template>

<script>
import Common from '@/Common';

export default {
  name: 'ZipSearch',
  data(){
    return {
      zip: "",
    };
  },
  methods: {
    onSubmit(event){
      event.preventDefault();
      const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip);

      if(!isValidZip) {
        Common.localNotify(this.$ionic.alertController, 'Enter Zip code', 'Please enter a valid zip code', ['OK']);
        this.zip = "";
      } else {
        // emit the zip up
        this.$emit("get-zip", this.zip);
        this.zip = "";
      }
    },
    
  }
}
</script>