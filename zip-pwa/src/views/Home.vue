<template lang="pug">
  div.ion-page
    ion-header
      ion-toolbar
        ion-title ZipperMole
    ion-content.ion-padding
      ZipSearch(
        v-on:get-zip="handleZipSearch"
      )
      ZipInfo(
        v-bind:info="zipInfo"
      )
      ClearInfo(
        v-bind:info="zipInfo"
        v-on:clear-info="clearInfo"
      )
</template>

<script>
import ZipSearch from '@/components/ZipSearch';
import ZipInfo from '@/components/ZipInfo';
import ClearInfo from '@/components/ClearInfo';
import Common from '@/Common';

export default {
  name: 'home',
  components: {
    ZipSearch, ZipInfo, ClearInfo
  },
  data(){
    return {
      zipInfo: null,
    };
  },
  methods: {
    async handleZipSearch(emittedZip){
      const res = await fetch(`https://api.zippopotam.us/us/${emittedZip}`);
      if(res.status == 404) {
        Common.localNotify(this.$ionic.alertController, 'Zip code search', 'Zip code not found', ['OK']);
      }
      this.zipInfo = await res.json();
    },
    clearInfo(){
      this.zipInfo = null;
    }
  }
}
</script>
