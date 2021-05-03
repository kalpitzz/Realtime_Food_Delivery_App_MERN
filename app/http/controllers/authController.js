//follows Factory Function pattern
//this file contains logic for authentication  eg. like CRUD operations

function authController()
{
    return {
        login(req,resp){
            resp.render('auth/login');
        },
        register(req,resp){
            resp.render('auth/register');
        }

    }
}

module.exports=authController;