
// Connecting to express
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
//Creating an object of server
const app = express();
//Generator string key
const key_generator=require("random-key-generator");
//Define an handler for route "/"
///////
const jsonParser=express.json();
//Import classes of data
//Functions
const GetMethods={
    Users:(require,response)=>{
        console.log(require.params.id);
        let email = require.params.id;
        let path = __dirname+'/src/users/list.json';
        console.log(path);
        let userList = JSON.parse(fs.readFileSync(path));
        if(email in userList.list){
            let pathUser = __dirname+'/src/users/datas/'+userList.list[email]+'.json';
            if(fs.existsSync(pathUser)){
                response.sendFile(pathUser);
            }
            else{
                delete userList.list[email];
                userList.amount-=1;
                fs.writeFileSync(path,JSON.stringify(userList,null,' '));
                response.send(JSON.stringify({email:null,password:null}));
            }
        }
        else{
            let pathTemp=__dirname+'/src/temp/temp.json';
            fs.writeFileSync(pathTemp,JSON.stringify({email:null,password:null}));
            response.sendFile(pathTemp);
        }
    }
};
const PostMethods={
    NewUser:(request,response)=>{
        console.log(request.body);
        let user = request.body|| null;
        let path = __dirname+'/src/users/list.json';
        let userList = JSON.parse(fs.readFileSync(path));
        if(user !== null){
            console.log('hello');
            if (user.email in userList.list){
                response.send(JSON.stringify({answer:false}));
            }
            else {
                let key = key_generator(6);
                userList.list[user.email]=key;
                userList.amount+=1;
                let pathUser = __dirname + '/src/users/datas/' + key+ '.json';
                fs.writeFileSync(pathUser, JSON.stringify(user, null, ' '));
                response.send(JSON.stringify({answer: true}));
                fs.writeFileSync(path,JSON.stringify(userList,null,' '));
            }
        }
        else response.send(JSON.stringify({answer:false}));
    }
};
const UpdateMethods={
    User:(request,response)=>{
        console.log(request.body);
        let updateFirstName=request.body.firstName||null;
        let updateSurname=request.body.surname||null;
        let updatePassword=request.body.password||null;
        let email = request.body.email || null;
        if(email !== null){
            let path = __dirname +'/src/users/list.json';
            let userList = JSON.parse(fs.readFileSync(path));
            if(email in userList.list){
                let key = userList.list[email];
                let pathUser = __dirname+'/src/users/datas/'+key+'.json';
                let userData=JSON.parse(fs.readFileSync(pathUser));
                if(updateFirstName !== null){
                    userData.firstName = updateFirstName;
                }
                if(updateSurname !== null){
                    userData.surname = updateSurname;
                }
                if(updatePassword !== null){
                    userData.password = updatePassword;
                }
                console.log('HELLO');
                fs.writeFileSync(pathUser,JSON.stringify(userData,null,' '));
                response.send(JSON.stringify({answer:true}));
            }
            else{
                response.send(JSON.stringify({asnwer:false}));
            }
        }
        else{
            response.send(JSON.stringify({asnwer:false}));
        }
    }
};
const DeleteMethods={
    User:(request,response)=>{
        console.log(request.body);
        let email = request.body.email || null;
        console.log('HHHHHHH0');
        if(email !== null) {
            let path = __dirname + '/src/users/list.json';
            let userList = JSON.parse(fs.readFileSync(path));
            if(email in userList.list){
                let pathUser = __dirname+'/src/users/datas/'+userList.list[email]+'.json';
                fs.unlinkSync(pathUser);
                delete userList.list[email];
                userList.amount-=1;
                fs.writeFileSync(path,JSON.stringify(userList,null,' '));
                response.send(JSON.stringify({answer:true}));
            }
            else response.send(JSON.stringify({answer:false}));
        }
        else{
            response.send(JSON.stringify({answer:false}));
        }
    }

};
//Requires
app.post("/users/delete",jsonParser,DeleteMethods.User);
app.post("/users/new",jsonParser,PostMethods.NewUser);
app.put("/users/update",jsonParser,UpdateMethods.User);
app.get("/users/:id",GetMethods.Users);
app.get('/',(request,response)=>{response.send('Default')});
//End
app.listen(3000);


