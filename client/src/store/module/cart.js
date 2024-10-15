import {
    addToCart,
    getAllCart,
    updateCartItem,
    deleteCartItem,
  } from "../../api/cartApi";
  
  const cart = {
    state: {
      cart: [],
    },
    getters: {
      cartItems: (state) => state.cart,
      cartTotal: (state) => {
        return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    actions: {
      async fetchCart({ commit }) {
        try {
          const response = await getAllCart();
          commit("setCart", response.data);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      },
      async addToCart({ commit }, product) {
        const newItem = { ...product, quantity: 1 };
        const response = await addToCart(newItem);
        commit("addCartItem", response.data);
      },
      async updateCartItem({ commit }, { id, product }) {
        await updateCartItem(id, product);
        commit("updateCartItem", { id, product });
      },
      async deleteCartItem({ commit }, id) {
        await deleteCartItem(id);
        commit("removeCartItem", id);
      },
    },
    mutations: {
      setCart: (state, cart) => {
        state.cart = cart;
      },
      addCartItem: (state, cartItem) => {
        state.cart.push(cartItem);
      },
      updateCartItem: (state, { id, product }) => {
        const index = state.cart.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.cart[index] = product;
        }
      },
      removeCartItem: (state, id) => {
        state.cart = state.cart.filter((item) => item.id !== id);
      },
    },
  };
  
  export default cart;
  