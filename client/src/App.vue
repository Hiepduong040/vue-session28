<template>
  <div>
    <div class="container">
        <ListProduct/>
        <cart/>
        
    </div>

  </div>
</template>

<script setup>
import Cart from './components/Cart.vue';
import ListProduct from './components/ListProduct.vue';

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

.container {
    display: flex;
    justify-content: space-between;
}

.product-list, .shopping-cart {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 48%;
}

.product-list h2, .shopping-cart h2 {
    margin-bottom: 20px;
}

.product-item, .cart-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}

.product-item img, .cart-item img {
    width: 80px;
    height: auto;
    margin-right: 20px;
}

.product-details, .cart-details {
    flex: 1;
}

.price-quantity, .cart-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

.quantity-input {
    width: 50px;
    padding: 5px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button.remove {
    background-color: #dc3545;
}

button.update {
    background-color: #28a745;
}

.success-message {
    color: #28a745;
    margin-top: 10px;
}

.cart-subtotal {
    border-top: 1px solid #ccc;
    padding-top: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>