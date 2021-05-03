//Follows Factory Function pattern
//This file contains logic for home eg. like CRUD operations

const { connection } = require("mongoose");

function cartController(){

    return{
        cart(req,resp){
            
            resp.render('customers/cart');
        },

        update(req,resp){

            //                      structure for data
            // let cart=                                    
            // {
            //         items:  {
            //                     pizzaId:{
            //                                 item:pizzaObject,
            //                                 qty:0
            //                             }
            //                 },
            //         totalQty:0,
            //         totalPrice:0
            // }
            if(!req.session.cart)
                {
                    req.session.cart={
                        items:{},
                        totalQty:0,
                        totalPrice:Number(0)
                    }
                }
            
            let cart=req.session.cart;
                    
            if(!cart.items[req.body._id]){
                cart.items[req.body._id]={
                                            item:req.body,
                                            qty:1
                                        },
                cart.totalQty+=1,
                cart.totalPrice+=Number(req.body.price)
                    
            }else{
                cart.items[req.body._id].qty+=1,
                cart.totalQty+=1,
                cart.totalPrice+=Number(req.body.price)
            }
         
        return resp.json({totalQty:req.session.cart.totalQty});
        }
        

    }

}

module.exports=cartController;