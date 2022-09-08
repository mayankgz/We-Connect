//  Application Constants Define Here
module.exports = {
    ROUTES :{
        USER:{
            LOGIN :'/login',
            PROFILE:'/profile',
            DELETE:'/delete/:user',
            UPDATE:'/reset_password'
        },
        ORDER :{
            ORDER_BOOK :'/order-book',
            ORDER_CANCEL:'/order-cancel'

        },
        ROOM :{
            FIND :'/find'
        }
    }
}