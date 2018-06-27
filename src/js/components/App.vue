<template>
  <div>
    <h2>Hahaha!</h2>
    <div>
      {{ test }}
    </div>
    <img
      src="~images/common/sample.jpg"
      alt=""
      width="150">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data() {
    return {
      test: 'TEST'
    }
  }
})
</script>
