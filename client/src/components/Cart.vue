<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <input type="number" v-model.number="item.quantity" @change="updateItem(item)" min="1" />
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.price * item.quantity }}</td>
          <td>
            <button @click="removeFromCart(item.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Total: ${{ cartTotal }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = computed(() => store.getters['cart/cartItems']);
const cartTotal = computed(() => store.getters['cart/cartTotal']);

const updateItem = (item) => {
  store.dispatch('cart/updateCartItem', { id: item.id, product: item });
};

const removeFromCart = (id) => {
  store.dispatch('cart/deleteCartItem', id);
};

store.dispatch('cart/fetchCart');
</script>

<style scoped>
</style>
