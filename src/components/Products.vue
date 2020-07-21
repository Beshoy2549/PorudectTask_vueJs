<template>
  <div class="text-center cards">
    <div class="container">
      <div class="row">
        <!-- Start Products loop -->
        <div
          id="my-products"
          :per-page="perPage"
          :current-page="currentPage"
          class="card col-lg-4 col-md-6 col-xs-12 my-4 fadeInUp"
          v-for="(product, i) in products"
          :key="i"
          v-wow
          data-wow-delay="0.1s"
          data-wow-duration="1.5s"
        >
          <img
            class="card-img-top"
            :src="product.featuredPhoto"
            alt="Card image cap"
          />
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
              v-b-modal.modal-1
              class="card-link btn btn-info"
              @click="showCard(product)"
            >
              <b-icon-eye></b-icon-eye> View Card
            </button>
            <button
              class="card-link btn btn-success"
              @click="addtocard(product)"
            >
              <b-icon-plus></b-icon-plus> Add Card
            </button>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div class="row">
        <div class="col-md-12">
          <b-pagination
            class="fadeInUp"
            v-wow
            data-wow-delay="1s"
            data-wow-duration="1.5s"
            v-model="currentPage"
            :total-rows="totalPages"
            :per-page="perPage"
            aria-controls="my-products"
          ></b-pagination>
        </div>
      </div>
      <!-- End pagination  -->
      <!-- End Products loop -->

      <!-- Start Products Modal -->
      <div class="row">
        <b-modal id="modal-1" title="Prouduct Item">
          <img :src="specificProduct.featuredPhoto" alt class="m-auto" />
          <div class="card-body">
            <h5 class="card-title text-center">{{ specificProduct.name }}</h5>
            <p class="text-center">{{ specificProduct.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">price {{ specificProduct.price }}</li>
            <li class="list-group-item">
              reviewsCount {{ specificProduct.reviewsCount }}
            </li>
            <li class="list-group-item">rate {{ specificProduct.rate }}</li>
          </ul>
        </b-modal>
      </div>
      <!-- End Products Modal -->
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "products",
  data() {
    return {
      specificProduct: "",
      perPage: 3,
      currentPage: 1
    };
  },
  computed: {
    products() {
      const items = this.$store.getters.products.products;
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalPages() {
      return this.$store.getters.products.products.length;
    }
  },
  methods: {
    ...mapMutations(["ADD_TO_CARD"]),
    addtocard(item) {
      this.ADD_TO_CARD(item);
    },
    showCard(product) {
      this.specificProduct = product;
    }
  }
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
}
.cards {
  margin-top: 1%;
  margin-bottom: 1%;
}
.card {
  margin: auto;
  margin-bottom: 4%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
img {
  height: 250px;
  margin: auto;
  display: block;
}
</style>
