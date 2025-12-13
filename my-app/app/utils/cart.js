import React from 'react'

export default function addToCart(product , quantity=1) {
    if(typeof window === 'undefined') return;

    let cart  = JSON.parse(localStorage.getItem('cart')) || [];
    const exit  = cart.find(item => item.id === product.id);
    if(exit){
        exit.quantity += quantity;
    }else{
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
        });
    }   
    localStorage.setItem('cart' , JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));

}
