var nodemailer=require('nodemailer');
var transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'prakashb2252002@gmail.com',
        pass:'tvohcvhuenuxbnmj'
    }
});
var mailoption={
    from:'prakashb2252002@gmail.com',
    to:'gokulbabu811@gmail.com',
    subject:'sending mail using Node.js',
    text:'hello world'
};
transport.sendMail(mailoption,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent'+info.response);
    }
});