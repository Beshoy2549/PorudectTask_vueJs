<template>
  <div class="home">
    <products />
  </div>
</template>

<script>
// @ is an alias to /src
import products from "@/components/Products.vue";

export default {
  name: "Home",
  components: {
    products
  }
};
</script>
<style lang="scss" >
body{
  overflow-x: hidden;
}
</style>