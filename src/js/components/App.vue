<template>
  <div>
    <h2>Hahaha!</h2>
    <div>
      {{test}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'app',
  data() {
    return {
      test: 'TEST'
    }
  }
})
</script>
