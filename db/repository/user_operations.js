const UserModel = require('../models/user');
module.exports = {
    add(userObject){
        var promise = UserModel.create(userObject);
        return promise;
    },
    find(userObject, response){
        UserModel.findOne({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                console.log("Data is",doc);
                response.json(doc);
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        })
    },
    update(userObject,response){
        UserModel.updateOne({userid:userObject.userid,password:userObject.password},{password:userObject.new_password}, (err, doc)=>{
            if(err){    
                response.json({message:'Some DB Error  '})

            }
            else if(doc){
                response.json(doc);
            }
            else{
                response.json({message:'Invalid Userid or Password'})
            }
        });
    },
    remove(userid){
        UserModel.findOneAndDelete({userid:userid},(err)=>{
            if(err){    
                response.json({message:'Some DB Error  '})

            }
            else if(doc){
                response.json({message:'Welcome '+userObject.userid});
            }
            else{
                response.json({message:"done"})
            }
        })

    }
}