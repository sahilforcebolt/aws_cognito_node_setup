const Aws =require("aws-sdk");
const AwsConfig = require('../awsconfig/config');
class cognitoService {
 
async  signUpUser(email, password, agent = 'none') {
    AwsConfig.initAWS ();
    AwsConfig.setCognitoAttributeList(email,agent);
try {
    AwsConfig.getUserPool().signUp(email, password, AwsConfig.getCognitoAttributeList(), null, function(err, result){
        if (err) {
            console.log(err)
          return err;
        }
        else{
            console.log(result);
        }
    });
    
} catch (error) {
    console.log("err iss",error);
    return false;
}
}
}
module.exports =cognitoService;