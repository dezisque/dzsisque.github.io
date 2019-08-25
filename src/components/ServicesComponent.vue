<template lang="html">
  <div class="container services" id="anchor">
    <span class="services-title">Погрузись во вселенную <p>liftoff adverts</p></span>
    <span class="services-lefttitle">Услуги</span>
    <service-card></service-card>
  </div>
</template>

<script>
import serviceCard from './serviceCard.vue'
export default {
  components: {
    'service-card' : serviceCard,
  }
}
</script>

<style lang="css" scoped>
</style>
