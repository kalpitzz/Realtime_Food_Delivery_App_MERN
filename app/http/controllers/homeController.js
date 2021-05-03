//Follows Factory Function pattern
//This file contains logic for home eg. like CRUD operations
const Menu=require('../../models/menu')

 function homeController()
{
    return {
        async index(req,resp){
          const pizzas=await Menu.find()
          return resp.render('home',{pizzas:pizzas});
         
        }
    }
}

module.exports=homeController;
