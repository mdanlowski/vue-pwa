<template lang="pug">
  ion-card(
    v-if="info"
  )
    ion-card-header
      ion-card-title {{info['places'][0]['place name']}}
      ion-card-subtitle(align="right") {{info['post code']}}
    ion-card-content
      ion-list
        ion-item
          ion-label
            strong State: {{info['places'][0]['state']}} ({{info['places'][0]['state abbreviation']}})    
        ion-item
          ion-label
            strong Latitude: {{info['places'][0]['latitude']}}
        ion-item
          ion-label
            strong Longitude: {{info['places'][0]['longitude']}}

    
  
</template>

<script>

export default {
  name: 'ZipInfo',
  props: [ 'info' ],
  data(){
    return {
    };
  },
  methods: {
    
  }
}
</script>