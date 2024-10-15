import axios from "axios";

export const addToCart=(product)=>{
    return axios.post("http://localhost:3000/cart",product)
}

export const getAllCart=()=>{
    return axios.get("http://localhost:3000/cart");
}

export const updateCartItem=(id,product)=>{
    return axios.put(`http://localhost:3000/cart/${id}`,product)
}

export const deleteCartItem=(id)=>{
    return axios.delete(`http://localhost:3000/cart/${id}`)
}