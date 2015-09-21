
Meteor.methods({addAid : function ( aid_category_id,aid_name) {

    /* var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

     if (!userAlreadyExists) {
     Accounts.createUser(user);
     }*/
    //"aid_id" :"1","aid_name" :"2","aid_category_id" :"3","row_created" :"4","row_updated" :"5"
    console.log('add aid in server');

  //  console.log(JSON.stringify(queryObj));
    check (aid_category_id,String);
    check (aid_name,String);
    var data ={
        "aid_category_id" : aid_category_id,
        "aid_name" : aid_name
        ,"row_created" :new Date()
        ,"row_updated" :new Date()
    }

    Aid.insert(data);
    console.log("Aid find " +  JSON.stringify(Aid.find().fetch()));

}});