import { getAllProducts } from "../../api/productApi"

const product  = {
  state: {
    products: [],
  },
  getters: {
    allProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await getAllProducts();
        commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
  },
};

export default product ;
