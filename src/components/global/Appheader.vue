<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
       
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/Mycartlist"
            >Mycartlist <span> [ {{ countMycartlist }} ] </span> </b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    countMycartlist() {
      return this.$store.getters.countMycartlist;
    },
  },
};
</script>

<style lang="scss" scoped>
    .navbar-dark .navbar-nav .nav-link {
       color:  rgba(255, 255, 255)
    }
    span {
        font-size: 15px;
        

    }
</style>