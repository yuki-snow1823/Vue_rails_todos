<template>
  <div class="loader-container" v-if="loading"> 
    <!-- v-ifで条件分岐 -->
    <div class="loaders">
      <div class="ball-clip-rotate">
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "loaders.css";
export default {
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.state.loading;//storeから読み込む
    }
  }
};
</script>