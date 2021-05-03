const homeController= require('../app/http/controllers/homeController.js');
const authController=require('../app/http/controllers/authController.js');
const cartController=require('../app/http/controllers/customers/cartController.js');
function initRoutes(app)
{
    //App Routes

    app.get('/',homeController().index);
    app.get('/login',authController().login);
    app.get('/register',authController().register);
    app.get('/cart',cartController().cart);
    app.post('/update-cart',cartController().update);

}

module.exports=initRoutes

