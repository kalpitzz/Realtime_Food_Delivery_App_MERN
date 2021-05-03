import axios from 'axios';
import Noty from 'noty';

let addToCart=document.querySelectorAll('.add-to-cart');
let cartCount=document.querySelector('#cartCounter');

function updateCart(pizza){
    //update cart
    axios.post('/update-cart',pizza).then(resp=>{
        cartCount.innerText=resp.data.totalQty;
        new Noty({type:'success',text:'Item added to cart',timeout:1000,progressBar:false}).show();
    },error=>{
        new Noty({type:'error',text:'Something went wrong',timeout:1000,progressBar:false}).show();
    }); 
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let pizza=JSON.parse(btn.dataset.pizza);
        updateCart(pizza);
    })
});