import { createStore } from "vuex";
import cart from "./module/cart";
import product from "./module/product";
const store = createStore({
    module:{
        cart,
        product,
    }
    
})

export default store;

