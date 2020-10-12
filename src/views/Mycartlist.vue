<template>
  <div class="text-center cards">
    <div class="container">
      <div class="row">
        <div v-if="Mycartlist != 0">
          <div
            class="card col-lg-10 col-md-6 col-xs-12 my-4 fadeInUp"
            v-for="(product, i) in Mycartlist"
            :key="i"
            v-wow
            data-wow-delay="0.1s"
            data-wow-duration="1.5s"
          >
            <div class="row">
              <div class="col-md-4">
                <img
                  class="card-img-top"
                  :src="product.featuredPhoto"
                  alt="Card image cap"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">price {{ product.price }}</li>
                  <li class="list-group-item">
                    reviewsCount {{ product.reviewsCount }}
                  </li>
                  <li class="list-group-item">rate {{ product.rate }}</li>
                </ul>
                <div class="card-body">
                  <button
                    class="card-link btn btn-danger"
                    @click="deleteCart(i)"
                  >
                    Delete Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-danger custom" role="alert" v-else>
          No Products Has Been Added
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    Mycartlist() {
      return this.$store.getters.Mycartlist;
    },
  },
  methods: {
    ...mapMutations(["DELETE_CARD"]),
    deleteCart(item) {
      this.DELETE_CARD(item);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 250px;
}
.custom {
  padding: 20px;
}
</style>
