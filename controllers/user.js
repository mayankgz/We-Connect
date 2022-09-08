const messages = require('../utils/locale/en');
const repo = require('../db/repository/user_operations');
const user_operations = require('../db/repository/user_operations');
const room_operations =require('../db/repository/room_operations');
const { findroom } = require('../db/repository/room_operations');
module.exports = {
    login(request, response){
        //console.log(request.body);
        const userObject = request.body;
        console.log('USER #### ', userObject);
        user_operations.find(userObject, response);
        // if(userObject.userid === userObject.password){
        //     response.json({message:messages['welcome']+userObject.userid});
        // }
        // else{
        //     response.json({message:messages['invalid']});
        // }
    },
    async register(request, response){
        const userObject = request.body;
        // Repository
        const result = await repo.add(userObject);
        //response.json(result);
        if(result && result.userid){
            response.json({message:'User Register SuccessFully '});
        }
        else{
            response.json({message:'Problem in User Register'});
        }
        // const promise = repo.add(userObject);
        // promise.then(result=>{

        // })

    },
    profile(request, response){
        const userObj = request.query; //?user=Amit (QueryString)
        response.json({message:'User Profile is ', userid: userObj.user})
    },
    deleteProfile(request, response){
        console.log(request.body.userid);
        const user = request.body.userid; // Path parameters
        user_operations.remove(user)
        response.json({message:'User Delete Profile is ', userid: user});
    },
    updatepassword(request, response){
        const userObj=request.body;
        user_operations.update(userObj,response);

    },
    findroom(request,response){
        const room= request.body;
        console.log(room);
        room_operations.findroom(room,response);
    },
    async addroom(request,response){
        const userObject = request.body;
        // Repository
        const result = await room_operations.addroom(userObject);
        //response.json(result);
        if(result && result.roomname){
            response.json({message:'room Register SuccessFully '});
        }
        else{
            response.json({message:'Problem in User Register'});
        }
    }

}