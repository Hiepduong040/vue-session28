<template>
    <div class="product-list">
      <h2>List Products</h2>
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span>Price: ${{ product.price }}</span>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const products = computed(() => store.getters['product/allProducts']);
  
  const addToCart = (product) => {
    store.dispatch('cart/addToCart', product);
  };
  
  store.dispatch('product/fetchProducts');
  </script>
  
  <style scoped>
  </style>
  