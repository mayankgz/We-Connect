const UserModel = require('../../db/models/room.js');
module.exports={
    findroom(userobject,response){
        UserModel.findOne({roomname:userobject.roomname},(err, doc)=>{
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
    addroom(userObject){
        var promise = UserModel.create(userObject);
        return promise;
    }
}